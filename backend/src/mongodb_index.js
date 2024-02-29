const http = require('http');
const { MongoClient } = require("mongodb");

// HTTP params init
const hostname = '0.0.0.0';
const port = 7293;

// MongoDB client init
const mongodb_uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongodb_uri);

async function run() {
  try {
    const database = client.db('me_db');
    const posts = database.collection('posts');

    const postAnswerCursor = await posts.find();
    const postAnswer = await postAnswerCursor.toArray();

    const htmlContent = generateHTML(postAnswer);

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(htmlContent);
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });

  } finally {
    await client.close();
  }
}

function generateHTML(data) {
  let html = '<html><head><title>MongoDB Data</title></head><body>';
  html += '<h1>Your MongoDB Data</h1>';
  html += '<ul>';
  data.forEach(item => {
    html += `<li>${JSON.stringify(item)}</li>`;
  });
  html += '</ul></body></html>';
  
  return html;
}

run().catch(console.dir);