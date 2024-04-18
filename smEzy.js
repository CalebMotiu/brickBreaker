let ezyMove={
    x: 300,
    y:300,
    directionX: 1,
    directionY: 1,
    speed: 3,
    ray: 50
}



function verfyMovmentEzy(){
    if (ezyMove.x >= right - ezyMove.ray || ezyMove.x <= leftAndTop+ ezyMove.ray)
    {ezyMove.directionX *= -1;}

    ezyMove.x += ezyMove.directionX * ezyMove.speed;
    if (ezyMove.y >= bottom - ezyMove.ray || ezyMove.y <= leftAndTop +ezyMove.ray)
    {ezyMove.directionY *= -1;}
    ezyMove.y += ezyMove.directionY * ezyMove.speed;
}


function smilyFaceEzy(x, y) {
  
    fill(255, 200, 0);
    ellipse(x, y, (ezyMove.ray*2));


    fill(5,0,0,)
    ellipse(x-(ezyMove.ray*12)/100, y-(ezyMove.ray*2)/5, (ezyMove.ray*2)/10);
    ellipse(x+(ezyMove.ray*12)/100, y-(ezyMove.ray*2)/5, (ezyMove.ray*2)/10);

    
    stroke(0);
    //strokeWeight(5);
    arc(x, y, (ezyMove.ray*4)/5, (ezyMove.ray*4)/5, 0, PI);
}