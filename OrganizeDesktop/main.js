let wallpaper = [".....", "....."];

function solution(wallpaper) {
  var answer = [];
  let check = false;
  let lux = 0;
  let luy =
    wallpaper[0].length > wallpaper.length
      ? wallpaper[0].length
      : wallpaper.length;
  let rdx = 0;
  let rdy = 0;

  wallpaper.forEach((str) => {
    let f = str.indexOf("#");
    let l = str.lastIndexOf("#");
    if (f !== -1) f < luy ? (luy = f) : null;
    if (l !== -1) l > rdy ? (rdy = l) : null;
  });

  rdy++;
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].indexOf("#") !== -1) {
      lux = i;
      break;
    }
  }
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[wallpaper.length - i - 1].indexOf("#") !== -1) {
      rdx = wallpaper.length - i;
      break;
    }
  }

  wallpaper.forEach((str) => {
    str.indexOf("#") + 1 ? (check = true) : null;
  });

  if (check === false) {
    lux = 0;
    luy = 0;
    rdx = 0;
    rdy = 0;
  }
  return (answer = [lux, luy, rdx, rdy]);
}

solution(wallpaper);
