var s = "aukks";
var skip = "wbqd";
var index = 5;

function solution(s, skip, index) {
  var answer = "";
  var sample = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let test = s.split(""); // s
  let filter = skip.split(""); // skip
  for (let i = 0; i < test.length; i++) {
    for (let ind = 0; ind < index; ind++) {
      alpha = sample.indexOf(test[i]);
      test[i] = sample[++alpha % 26];
      while (!checkTest(test, filter)) {
        test[i] = sample[++alpha % 26];
      }
    }
  }
  return (answer = test.join(""));
}
function checkTest(test, filter) {
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < filter.length; j++) {
      if (test[i] === filter[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(s, skip, index));
