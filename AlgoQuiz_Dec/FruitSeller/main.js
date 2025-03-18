let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

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
console.log(solution(4, 3, score));
