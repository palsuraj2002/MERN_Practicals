const empModel = require("../model/empModel.js");

const addEmp = async (req, res) => {
  try {
    const data = new empModel(req.body);
    const empadd = await data.save();
    res.json(empadd);
  } catch (error) {
    console.log(error);
  }
};

const updateEmp = async (req, resp) => {
  try {
    const updateemp = await empModel.findByIdAndUpdate(
      { _id: req.params.id },
      { salary: req.body.salary, age: req.body.age }
    );
    resp.json(updateemp);
  } catch (error) {
    resp.send(error);
  }
};

const deleteEmp = async (req, resp) => {
  try {
    const deleteemp = await empModel.deleteOne({ _id: req.params.id });
    resp.json(deleteemp);
  } catch (error) {
    resp.send(error);
  }
};

const getAllEmp = async (req, resp) => {
  try {
    const result = await empModel.find();
    resp.json(result);
  } catch (error) {
    resp.send(error);
  }
};

module.exports = {
  getAllEmp,
  addEmp,
  updateEmp,
  deleteEmp,
};
