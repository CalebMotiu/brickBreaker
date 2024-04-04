let ezyMoveX=300;
let ezyMoveY=300;
let directionEzyX=10;


function verfyMovmentEzy(){
    if (ezyMoveX >= right || ezyMoveX <= leftAndTop)
    {directionEzyX *= -1;}

    ezyMoveX += directionEzyX;
}


function smilyFaceEzy(x, y) {
  
    fill(255, 200, 0);
    ellipse(x, y, 50);


    fill(5,0,0,)
    ellipse(x-3, y-10, 5);
    ellipse(x+3, y-10, 5);

    
    stroke(0);
    //strokeWeight(5);
    arc(x, y, 20, 20, 0, PI);
}