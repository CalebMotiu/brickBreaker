
let smCaleb={
x : 100,
y : 150,
diameter:50,
moveX:1,
moveY:1,
speedX:5,
speedY:10
};
function verfyMovmentCaleb(){
    if (smCaleb.x >= right-(smCaleb.diameter/2) || smCaleb.x <= leftAndTop+(smCaleb.diameter/2))
    {smCaleb.moveX *= -1;}

    smCaleb.x += smCaleb.moveX * smCaleb.speedX;

    if (smCaleb.y >= bottom-(smCaleb.diameter/2) || smCaleb.y <= leftAndTop+(smCaleb.diameter/2))
    {smCaleb.moveY *= -1;}

    smCaleb.y += smCaleb.moveY* smCaleb.speedY;
}
function smilyFaceCaleb(x, y) {
    stroke("black");
    fill("red");
    circle(x, y, smCaleb.diameter);
    //eye
    stroke("black");
    circle(x-3,y-3,5);
    circle(x+3,y-3,5);
    stroke("blue");
    fill("blue");
    circle(x-3,y-3,4);
    circle(x+3,y-3,4);

    //mouth
    stroke("black")
    fill("red");
    arc(x,y+3,10,7,0,PI)
}