var friends = ["muzi", "muzir", "frodo", "neo"];
var gifts = [
  "muzi frodo",
  "muzi frodo",
  "muzir muzi",
  "muzir muzi",
  "muzir muzi",
  "frodo muzi",
  "frodo muzir",
  "neo muzi",
];

function solution(friends, gifts) {
  var answer = 0;
  var giftScore = [];
  var nextMonthPresent = [];

  for (let i = 0; i < friends.length; i++) {
    giftScore[i] = 0;
    for (let j = 0; j < gifts.length; j++) {
      const sample = gifts[j].split(" ");
      if (sample[1] === friends[i]) {
        giftScore[i]--;
      } else if (sample[0] === friends[i]) {
        giftScore[i]++;
      }
    }
  }

  for (let i = 0; i < friends.length; i++) {
    nextMonthPresent.push(calculateGiftScore(i, friends, gifts, giftScore));
  }

  for (let i = 0; i < nextMonthPresent.length; i++) {
    if (answer < nextMonthPresent[i]) answer = nextMonthPresent[i];
  }
  return answer;
}

function calculateGiftScore(index, friends, gifts, giftScore) {
  let test1;
  let test2;
  let result = 0;
  for (let i = 0; i < friends.length; i++) {
    let count1 = 0;
    let count2 = 0;
    if (i !== index) {
      test1 = friends[i] + " " + friends[index];
      test2 = friends[index] + " " + friends[i];
      count1 = gifts.filter((item) => test1 === item).length;
      count2 = gifts.filter((item) => test2 === item).length;
      if (count1 !== 0 || count2 !== 0) {
        if (count1 < count2) result++;
        if (count1 === count2) {
          if (giftScore[index] > giftScore[i]) result++;
        }
      } else if (count1 === 0 && count2 === 0) {
        if (giftScore[index] > giftScore[i]) result++;
      }
    }
  }
  return result;
}

console.log(solution(friends, gifts));
