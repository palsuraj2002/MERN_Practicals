//core module
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  let path = "./views/";

  switch (req.url) { 
    case "/":
      path = path + "index.html";
      break;

    case "/about":
      path = path + "about.html";
      break;

    case "/contact":
      path = path + "contact.html";
      break;

    default:
      path = path + "error.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      resp.end(err);
    } else {
      resp.end(data);
    }
  });
});

server.listen(4000, () => {
  console.log("server is running....");
});
