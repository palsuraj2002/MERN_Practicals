const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Employees")
  .then(() => {
    console.log("MongoDB is Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const empSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  age: Number,
});

const empModel = mongoose.model("emp", empSchema);

const app = express();

const port = 2006;

//json() middleware
app.use(express.json());

//Q2: creating Restful API with HTTP Methods

//http get
app.get("/", (req, resp) => {
  resp.end("Hello User!");
});

//http post
app.post("/emp/add", async (req, resp) => {
  const data = new empModel({
    name: req.body.name,
    salary: req.body.salary,
    age: req.body.age,
  });
  try {
    const result = await data.save();
    resp.status(200).json(result);
  } catch (error) {
    resp.send(error);
  }
});

//http put
app.put("/emp/update/:id", async (req, resp) => {
  try {
    const empUpdate = await empModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { salary: req.body.salary }
    );
    resp.json(empUpdate);
  } catch (error) {
    resp.send(error);
  }
});

//http delete
app.delete("/emp/delete/:id", async (req, resp) => {
  try {
    const empDelete = await empModel.findByIdAndDelete({
      _id: req.params.id,
    });
    resp.json(empDelete);
  } catch (error) {
    resp.send(error);
  }
});

app.get("/emp/all", async (req, resp) => {
  try {
    const showEmp = await empModel.find();
    resp.json(showEmp);
  } catch (error) {
    resp.send(error);
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
