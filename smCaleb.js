let calebPointX = 100;
let calebPointY = 150;
let calebMoveX=10;
let calebMoveY=10;

function verfyMovmentCaleb(){
    if (calebPointX >= right || calebPointX <= leftAndTop)
    {calebMoveX *= -1;}

    calebPointX += calebMoveX;

    if (calebPointY >= bottom || calebPointY <= leftAndTop)
    {calebMoveY *= -1;}

    calebPointY += calebMoveY;
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