
let smCaleb={
x : 100,
y : 150,
moveX:1,
moveY:1,
speed:100
};
function verfyMovmentCaleb(){
    if (smCaleb.x >= right || smCaleb.x <= leftAndTop)
    {smCaleb.moveX *= -1;}

    smCaleb.x += smCaleb.moveX * smCaleb.speed;

    if (smCaleb.y >= bottom || smCaleb.y <= leftAndTop)
    {smCaleb.moveY *= -1;}

    smCaleb.y += smCaleb.moveY* smCaleb.speed;
}
function smilyFaceCaleb(x, y) {
    stroke("black");
    fill("red");
    circle(x, y, 20);
    //eye
    stroke("black");
    circle(x-3,y-3,3);
    circle(x+3,y-3,3);
    stroke("blue");
    fill("blue");
    circle(x-3,y-3,2);
    circle(x+3,y-3,2);

    //mouth
    stroke("black")
    fill("red");
    arc(x,y+3,10,7,0,PI)
}