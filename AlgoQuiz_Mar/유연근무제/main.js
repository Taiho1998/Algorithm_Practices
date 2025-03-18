function solution(schedules, timelogs, startday) {
  var answer = 0;
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
var startday = 5;
