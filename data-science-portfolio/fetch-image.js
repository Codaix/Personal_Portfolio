const https = require('https');
https.get('https://unsplash.com/services/oembed?url=https://unsplash.com/photos/a-clock-on-a-wall-in-a-dark-room-fJwuuKRWUm8', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    try {
        const json = JSON.parse(data);
        console.log("URL:", json.thumbnail_url);
    } catch(e) {
        console.log("Error logic fallthrough:", data.slice(0, 100));
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
