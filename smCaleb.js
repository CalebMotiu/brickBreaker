
let smCaleb={
x : 100,
y : 150,
diameter:20,
moveX:1,
moveY:1,
speedX:10,
speedY:5
};

function verfyMovmentCaleb(){
    if (smCaleb.x >= right-(smCaleb.diameter/2) || smCaleb.x <= leftAndTop+(smCaleb.diameter/2))
    {smCaleb.moveX *= -1;}

    smCaleb.x += smCaleb.moveX * smCaleb.speedX;

    if (smCaleb.y >= bottom-(smCaleb.diameter/2) || smCaleb.y <= leftAndTop+(smCaleb.diameter/2))
    {smCaleb.moveY *= -1;}

    if (
        smCaleb.y >= pdCaleb.y - (smCaleb.diameter / 2) &&
        smCaleb.y <= pdCaleb.y + pdCaleb.height &&
        smCaleb.x >= pdCaleb.x - (smCaleb.diameter / 2) &&
        smCaleb.x <= pdCaleb.x + (pdCaleb.width + smCaleb.diameter / 2)
      ) {
        smCaleb.moveY *= -1;
      }

      smCaleb.y += smCaleb.moveY * smCaleb.speedY;

}
function smilyFaceCaleb(x, y) {
    stroke("black");
    fill("red");
    circle(x, y, smCaleb.diameter);
    //eye
    stroke("black");
    fill("blue");
    circle(x-smCaleb.diameter/10,y-smCaleb.diameter/10,smCaleb.diameter/5);
    circle(x+smCaleb.diameter/10,y-smCaleb.diameter/10,smCaleb.diameter/5);

    //mouth
    stroke("black")
    fill("red");
    arc(x,y+smCaleb.diameter/10,10,7,0,PI)
}