var Aname = ["may", "kein", "kain", "radi"];
var yearning = [5, 10, 1, 3];
var photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
  var answer = [];
  for (let i = 0; i < photo.length; i++) {
    let total = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (name.indexOf(photo[i][j]) !== -1) {
        total += yearning[name.indexOf(photo[i][j])];
      }
    }
    answer.push(total);
  }
  return answer;
}

console.log(solution(Aname, yearning, photo));
