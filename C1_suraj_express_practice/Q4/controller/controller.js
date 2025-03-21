//Q4-i:Hello World!
const getHelloPage = (req, resp) => {
  resp.render("hello", { title: "Hello Page" });
};

module.exports = {
  getHelloPage,
};
