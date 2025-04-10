//user-defined modules
function addNum(a, b) {
  console.log(a + b);
}

function subNum(a, b) {
  console.log(a - b);
}

function mulNum(a, b) {
  console.log(a * b);
}

function divNum(a, b) {
  console.log(a / b);
}

module.exports = { addNum, subNum, mulNum, divNum };
