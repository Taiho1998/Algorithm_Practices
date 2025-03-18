function solution(n, w, num) {
  var answer = 0;
  // n = 택배 상자의 개수
  // w = 가로로 놓는 상자의 개수
  // num = 꺼내고자 하는 상자의 번호
  var boxlist = [];
  var boxPiles = [];
  var init = w;
  let count = 0;
  // 박스를 쌓는 과정
  for (let i = 1; i <= n; i++) {
    if (i <= init) boxlist.push(i);
    if (i + 1 > init || i === n) {
      console.log(init, boxlist);
      boxPiles.push(boxlist);
      init = init + w;
      boxlist = [];
      count++;
    }
  }
  console.log(boxPiles);
  count = 0;
  for (let k = 0; k < boxPiles.length; k++) {
    var boxIndex = boxPiles[k].findIndex((value) => value === num);
    if (boxIndex + 1) {
      for (let j = k; j < boxPiles.length; j++) {
        var check =
          (j - k) % 2 === 1
            ? boxPiles[j][w - (boxIndex + 1)]
            : boxPiles[j][boxIndex];
        if (check) count++;
      }
    }
  }
  return (answer = count);
}

console.log(solution(22, 6, 8));
