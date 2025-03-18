function solution(schedules, timelogs, startday) {
  var answer = schedules.length;
  for (let i = 0; i < schedules.length; i++) {
    var limit = timeToInt(schedules[i]) + 10;
    console.log("출근 시간", limit);
    for (let j = 0; j < 7; j++) {
      var today = (startday + j) % 7;
      if (today !== 6 && today !== 0) {
        var arrive = timeToInt(timelogs[i][j]);
        console.log(j, " 출근 ", arrive, "제한 시간: ", limit);
        if (arrive > limit) {
          answer--;
          break;
        }
      }
    }
  }
  return answer;
}

function timeToInt(time) {
  return parseInt(time / 100) * 60 + (time % 100);
}

var schedules = [700, 800, 1100];
var timelogs = [
  [710, 2359, 1050, 700, 650, 631, 659],
  [800, 801, 805, 800, 759, 810, 809],
  [1105, 1001, 1002, 600, 1059, 1001, 1100],
];
var startday = 4;

console.log(solution(schedules, timelogs, startday));
