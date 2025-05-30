
let smCaleb = {
  x: right / 2,
  y: bottom / 2,
  diameter: 50,
  moveX: 1,
  moveY: 1,
  speedX: 5,
  speedY: 5
}

function verfyMovmentCaleb() {
  if (smCaleb.x >= right - (smCaleb.diameter / 2) || smCaleb.x <= leftAndTop + (smCaleb.diameter / 2)) { smCaleb.moveX *= -1; }

  if (
    smCaleb.y >= pdCaleb.y - (smCaleb.diameter / 2) &&
    smCaleb.y <= pdCaleb.y + (pdCaleb.height + smCaleb.diameter / 2) &&
    smCaleb.x >= pdCaleb.x - (smCaleb.diameter / 2) &&
    smCaleb.x <= pdCaleb.x + (pdCaleb.width + smCaleb.diameter / 2)
  ) {
    if (smCaleb.y < pdCaleb.y) { smCaleb.moveY *= -1; }
    else { smCaleb.moveX *= -1; }

  }
  smCaleb.x += smCaleb.moveX * smCaleb.speedX;

  if ( smCaleb.y <= leftAndTop + (smCaleb.diameter / 2)) { smCaleb.moveY *= -1; }

  smCaleb.y += smCaleb.moveY * smCaleb.speedY;

}

function verfyBoxTouchCaleb(){
  bricksCaleb.forEach(brick => {
  if (
    smCaleb.y >= brick.y - (smCaleb.diameter / 2) &&
    smCaleb.y <= brick.y + (brick.height + smCaleb.diameter / 2) &&
    smCaleb.x >= brick.x - (smCaleb.diameter / 2) &&
    smCaleb.x <= brick.x + (brick.width + smCaleb.diameter / 2)
  ) {
    brick.hit = true;
    if (smCaleb.y >= brick.y + brick.height) { smCaleb.moveY *= -1; }
    else if(smCaleb.y <= brick.y) { smCaleb.moveY *= -1; }
    else { smCaleb.moveX *= -1; }
  }
  })
}


function smilyFaceCaleb(x, y) {
  stroke("black");
  fill("red");
  circle(x, y, smCaleb.diameter);
  //eye
  stroke("black");
  fill("blue");
  circle(x - smCaleb.diameter / 10, y - smCaleb.diameter / 10, smCaleb.diameter / 5);
  circle(x + smCaleb.diameter / 10, y - smCaleb.diameter / 10, smCaleb.diameter / 5);

  //mouth
  stroke("black")
  fill("red");
  arc(x, y + smCaleb.diameter / 10, 10, 7, 0, PI)
}