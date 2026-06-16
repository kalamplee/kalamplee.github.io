const https = require('https');

const imageUrl = 'https://c10.patreonusercontent.com/4/patreon-media/p/post/161140184/b596d55980364b8c95648a25023a93cb/eyJ3Ijo2MjB9/1.jpg?token-hash=1l50TnxrdPrLafn5lbLTUQd9dUPY8NFatcy1Tw3ihJc%3D&token-time=1782864000';

async function checkImage(index) {
    const testUrl = imageUrl.replace('1.jpg', `${index}.jpg`);
    return new Promise((resolve) => {
        https.get(testUrl, (res) => {
            resolve({ index, status: res.statusCode });
        }).on('error', () => resolve({ index, status: 'ERROR' }));
    });
}

async function run() {
    for (let i = 1; i <= 5; i++) {
        const res = await checkImage(i);
        console.log(`Image ${i}: ${res.status}`);
    }
}

run();
