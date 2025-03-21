const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const connectMongo = require("./db.js");
const router = require("./routes/routes.js");
const empModel = require("./model/empModel.js");

//database connection
connectMongo();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3007;
app.use(ejsLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", router);

app.get("/show", async (req, resp) => {
  const result = await empModel.find();
  resp.render("show", { title: "Show Page", result });
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
