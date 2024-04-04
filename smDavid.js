let davidMove = {
    x: 200,
    y: 200,
    directionX: 1,
    directionY: 1,
    speed: 3
}

function checkLimitsSMDavid(){
    if (davidMove.x>= right || davidMove.x<= leftAndTop)
        davidMove.directionX*=-1;

    davidMove.x+=davidMove.directionX * davidMove.speed;

    if (davidMove.y>= bottom || davidMove.y<= leftAndTop)
        davidMove.directionY*=-1;

    davidMove.y+=davidMove.directionY * davidMove.speed;
    
}

function smilyFaceDavid(x, y) {
    stroke("black");
    fill("yellow");
    ellipse(x, y, 50); // Face ellipse

    // Drawing the eyes
    stroke("black");
    fill("white");
    ellipse(x - 10, y - 10, 10, 10); // Left eye
    ellipse(x + 10, y - 10, 10, 10); // Right eye

    // Pupils
    fill("red");
    circle(x - 10, y - 10, 5);
    circle(x + 10, y - 10, 5);

    // Drawing the mouth
    noFill();
    stroke("black");
    arc(x, y + 5, 25, 6, 0, PI); // Smile arc
}