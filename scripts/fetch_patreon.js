const https = require('https');
const fs = require('fs');
const path = require('path');

const API_URL = 'https://www.patreon.com/api/posts?filter[campaign_id]=15855361&page[size]=1&sort=-published_at';
const OUTPUT_FILE = path.join(__dirname, '../_data/patreon.yml');

async function fetchPatreonPost() {
    console.log('Fetching latest Patreon post...');

    return new Promise((resolve, reject) => {
        https.get(API_URL, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const post = json.data?.[0];
                    if (!post) {
                        console.log('No Patreon posts found.');
                        return resolve();
                    }

                    const attrs = post.attributes;
                    const contentJsonStr = attrs.content_json_string;
                    let contentData = [];

                    if (contentJsonStr) {
                        try {
                            const parsed = JSON.parse(contentJsonStr);
                            contentData = parsed.content || [];
                        } catch (e) {
                            console.error('Error parsing content_json_string');
                        }
                    }

                    // Extract first paragraph for excerpt
                    let excerpt = '';
                    const firstPara = contentData.find(node => node.type === 'paragraph' && node.content);
                    if (firstPara) {
                        excerpt = firstPara.content
                            .filter(c => c.type === 'text')
                            .map(c => c.text)
                            .join(' ')
                            .trim();
                    }

                    // Extract images from content + main image
                    const images = [];
                    if (attrs.image && attrs.image.url) {
                        images.push(attrs.image.url);
                    }

                    contentData.forEach(node => {
                        if (node.type === 'image' && node.url) {
                            images.push(node.url);
                        } else if (node.type === 'paragraph' && node.content) {
                            node.content.forEach(c => {
                                if (c.type === 'image' && c.url) images.push(c.url);
                            });
                        }
                    });

                    // Remove duplicates and limit to 3
                    const uniqueImages = [...new Set(images)].slice(0, 3);

                    // Extract YouTube video
                    let videoUrl = null;
                    contentData.forEach(node => {
                        if (node.type === 'video' && node.url) {
                            videoUrl = node.url;
                        } else if (node.type === 'paragraph' && node.content) {
                            node.content.forEach(c => {
                                if (c.type === 'link' && c.url && (c.url.includes('youtube.com') || c.url.includes('youtu.be'))) {
                                    videoUrl = c.url;
                                }
                            });
                        }
                    });

                    const patreonData = {
                        title: attrs.title,
                        url: attrs.url,
                        excerpt: excerpt || '...',
                        images: uniqueImages,
                        video: videoUrl
                    };

                    // Write to YAML
                    let yamlContent = `title: "${patreonData.title.replace(/"/g, '\\"')}"\n`;
                    yamlContent += `url: "${patreonData.url}"\n`;
                    yamlContent += `excerpt: "${patreonData.excerpt.replace(/"/g, '\\"').replace(/\\n/g, ' ')}"\n`;

                    if (patreonData.video) {
                        yamlContent += `video: "${patreonData.video.replace(/"/g, '\\"')}"\n`;
                    }

                    if (patreonData.images.length > 0) {
                        yamlContent += `images:\n`;
                        patreonData.images.forEach(img => {
                            yamlContent += `  - "${img.replace(/"/g, '\\"')}"\n`;
                        });
                    }

                    fs.writeFileSync(OUTPUT_FILE, yamlContent, 'utf8');
                    console.log('Successfully updated _data/patreon.yml with JSON content parsing');
                    resolve();
                } catch (e) {
                    console.error('Failed to parse Patreon API response:', e);
                    reject(e);
                }
            });
        }).on('error', (err) => {
            console.error('API request failed:', err);
            reject(err);
        });
    });
}

fetchPatreonPost().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
