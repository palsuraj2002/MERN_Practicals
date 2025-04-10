/*installing the necessary packages for mongoose
step 1: npm init -y for package.json file
step 2: npm i mongoose for package-lock.json file
*/

//importing the mongoose package;
const mongoose = require("mongoose");

//creating connection with mongodb;
mongoose
  .connect("mongodb://localhost:27017/c1_node")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

//creating Schema;
const empSchema = mongoose.Schema({
  id: Number,
  name: String,
  sal: Number,
});

//creating model;
const empModel = mongoose.model("emps", empSchema);

//creating method of addEmp;
const addEmp = async () => {
  const data = new empModel({
    id: 1,
    Name: "tom",
    sal: 12999,
  });

  const result = await data.save();
  console.log(result);
};
addEmp();

//creating method of updateEmp;
const updateEmp = async () => {
  const result = await empModel.updateOne({ id: 1 }, { $set: { sal: 29999 } });
  console.log(result);
};
updateEmp();

//creating method of deleteEmp;
const deleteEmp = async () => {
  const result = await empModel.deleteOne({ id: 1 });
  console.log(result);
};
deleteEmp();

//creating method of findEmp;
const findEmp = async () => {
  const result = await empModel.find();
  console.log(result);
};
findEmp();
