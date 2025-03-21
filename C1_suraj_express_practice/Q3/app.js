const express = require("express");
const connectMongo = require("./db.js");
const router = require("./routes/routes.js");

connectMongo();

const app = express();
const port = 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/emp", router);

app.listen(port, () => {
  console.log(`server is running on ${port} `);
});
