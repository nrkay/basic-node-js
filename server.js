const http = require("http");
const { chunk } = require("lodash");
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.setHeader('X-Powered-By', 'NodeJS');
  response.statusCode = 200;

  const { method, url } = request;
  if (url === "/") {
    if (method === "GET") {
      response.end(JSON.stringify({
        massage : "ini adalah homepage",
      }));
    } else {
      response.end(JSON.stringify({
        massage : `Halaman tidak dapat direspon menggunakan ${method} ini`
      }));
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end(JSON.stringify({
        massage : "Ini adalah laman About!!"
      }));
    } else if (method === "POST") {
      let body = [];
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(JSON.stringify({
          message : `Halo, ${name}! Ini adalah halaman about`
        }));
      });
    } else {
      response.end(JSON.stringify({
        massage : `Tidak dapat mengakses laman ini menggunakan ${method} ini`
      }));
    }
  } else {
    response.end(JSON.stringify({
      massage : "Laman tidak dapat ditemukan"
    }));
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
