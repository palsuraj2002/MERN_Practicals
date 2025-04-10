const demo = require("./httpServer.js");

demo.server.listen(2003, () => {
  console.log("server is running.....");
});
