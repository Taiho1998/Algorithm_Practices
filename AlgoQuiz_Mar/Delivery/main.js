const solution = (n, w, num) => {
  let res = 1;
  const total = Math.ceil(n / w);
  const target = Math.ceil(num / w);
  const nRemain = n % w || n;
  const numRemain = num % w || num;
  if (total % 2 === target % 2 && nRemain < numRemain) res -= 1;
  if (total % 2 !== target % 2 && nRemain + numRemain <= w) res -= 1;
  console.log(total, target, nRemain, numRemain);
  return total - target + res;
};

console.log(solution(99, 10, 10));
