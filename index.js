const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((요청, 응답) => {
    응답.statusCode = 200;
    응답.setHeader("Content-Type", "text/html; charset=utf-8");
    응답.end("<div><h1>안녕하세요</hl></div>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});