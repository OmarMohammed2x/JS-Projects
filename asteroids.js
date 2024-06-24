// this code build a trianle 

function buildTriangle(height) {
  let ttiangle = "";
  function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
      line += "* ";
    }
    return line + "\n";
  }
  for (let i = 1; i <= height; i++) {
    ttiangle += makeLine(i);
  }
  return ttiangle;
}

console.log(buildTriangle(20));

