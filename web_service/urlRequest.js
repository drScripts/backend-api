const http = require("http");

const requestListener = (request, response) => {
  const { url, method } = request;
  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;

  if (url === "/") {
    if (method === "GET") {
      response.end(
        JSON.stringify({
          message: "Ini adalah homepage",
          status: response.statusCode,
        })
      );
    } else {
      response.statusCode = 404;
      response.end(
        JSON.stringify({
          message: `Anda Tidak Dapat Mengakses dengan method ${method}`,
          status: response.statusCode,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `Halo! Ini adalah halaman about`,
          status: response.statusCode,
        })
      );
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunck) => {
        body.push(chunck);
      });

      request.on("end", () => {
        response.statusCode = 200;
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(
          JSON.stringify({
            message: `Halo, ${name}! Ini adalah halaman about`,
            status: response.statusCode,
          })
        );
      });
    } else {
      response.statusCode = 404;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
          status: response.statusCode,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan!",
        status: response.status,
      })
    );
  }
};

const port = 3000;
const host = "localhost";

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server Running at http://${host}:${port}`);
});
