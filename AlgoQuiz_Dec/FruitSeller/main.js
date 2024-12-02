let score = [1, 2, 3, 1, 2, 3, 1];

function solution(k, m, score) {
  var answer = 0;
  let box = [];

  let sortedScore = score.sort((a, b) => b - a);
  for (let i = 0; i < sortedScore.length; i++) {
    box.push(sortedScore[i]);
    if (box.length === m) {
      answer += box[box.length - 1] * m;
      box = [];
    }
  }
  return answer;
}
console.log(solution(3, 4, score));
