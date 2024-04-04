let ezyMove={
    x: 300,
    y:300,
    directionX: 1
}



function verfyMovmentEzy(){
    if (ezyMove.x >= right || ezyMove.x <= leftAndTop)
    {ezyMove.directionX *= -1;}

    ezyMove.x += ezyMove.directionX;
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