const { odd, even } = require("./var");
function check(num) {
  if (num % 2 == 0) {
    return even;
  } else {
    return odd;
  }
}

//exports된 변수를 .require를 통해서 외부의 변수를 가져올 수 있음

module.exports = check;
