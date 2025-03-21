const express = require("express");
const app = express();
const port = 2001;

//Q1-i
app.get("/", (req, resp) => {
  resp.end("Hello");
});

//Q1-ii: creating Restful API to display Home & About_us Page
app.get("/home", (req, resp) => {
  resp.sendFile("/views/home.html", { root: __dirname });
});

app.get("/about", (req, resp) => {
  resp.sendFile("/views/about.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
