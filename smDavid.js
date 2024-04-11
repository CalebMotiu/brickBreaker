let davidMove = {
    x: 200,
    y: 200,
    directionX: 1,
    directionY: 1,
    speedX: 0.1,
    speedY: 2.1,
    ray: 25
}

function checkLimitsSMDavid(){
    if (davidMove.x>= right - davidMove.ray || davidMove.x<= leftAndTop + davidMove.ray)
        davidMove.directionX*=-1;

    davidMove.x+=davidMove.directionX * davidMove.speedX;

    if (davidMove.y>= bottom - davidMove.ray|| davidMove.y<= leftAndTop + davidMove.ray)
        davidMove.directionY*=-1;

    davidMove.y+=davidMove.directionY * davidMove.speedY;
    
}

function smilyFaceDavid(x, y) {
    stroke("black");
    fill("yellow");
    ellipse(x, y, davidMove.ray*2); // Face ellipse

    // Drawing the eyes
    stroke("black");
    fill("white");
    ellipse(x - (davidMove.ray*2)/5, y - (davidMove.ray*2)/5, (davidMove.ray*2)/5, (davidMove.ray*2)/5); // Left eye
    ellipse(x + (davidMove.ray*2)/5, y - (davidMove.ray*2)/5, (davidMove.ray*2)/5, (davidMove.ray*2)/5); // Right eye

    // Pupils
    fill("red");
    circle(x -(davidMove.ray*2)/5, y - (davidMove.ray*2)/5, (davidMove.ray*2)/10);
    circle(x +(davidMove.ray*2)/5, y - (davidMove.ray*2)/5, (davidMove.ray*2)/10);

    // Drawing the mouth
    noFill();
    stroke("black");
    arc(x, y + davidMove.ray/5, davidMove.ray, (davidMove.ray*2)*12/100, 0, PI); // Smile arc
}