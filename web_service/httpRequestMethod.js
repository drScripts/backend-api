const http = require("http");

// request and response handling

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  const { method } = request;

  if (method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end("<h1>Hello This is for Testing GET Reponse</h1>");
  }

  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>${name}</h1>`);
    });
  }

  if (method === "PUT") {
    response.end("<h1>Testing PUT Reponse</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Testing DELETE Reponse</h1>");
  }
};

const port = 8080;
const host = "localhost";

// membuat server
const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server Berjalan di http://${host}:${port}`);
});
