const https = require('https');

const API_URL = 'https://www.patreon.com/api/posts?filter[campaign_id]=15855361&page[size]=1&sort=-published_at';

https.get(API_URL, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const json = JSON.parse(data);
        const post = json.data?.[0];
        console.log('POST ATTRIBUTES:');
        console.log(JSON.stringify(post.attributes, null, 2));
    });
}).on('error', (err) => {
    console.error('API request failed:', err);
});
