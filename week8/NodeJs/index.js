const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  // Set the response header with HTTP status and Content-Type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Send the response body
  res.end("Hello, from the backend\n");
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
