//Q2

//core module
const fs = require("fs");

//read the file
fs.readFile("text.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//write the file
fs.writeFile("text1.txt", " Myself Anthony", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});

//deleting the file
fs.unlink("text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file Deleted");
  }
});

//appending the content into the existing file
fs.appendFile("text.txt", " Good Morning PineApple", (err) => {
  if (err) throw err;
  console.log("Your data is appended to file!");
});

//making new directory or folder
fs.mkdir("test", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder created");
  }
});

//removing the directory or folder
fs.rmdir("test", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("folder deleted");
  }
});
