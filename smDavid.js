let davidMove = {
    x: 200,
    y: 200,
    directionX: 1,
    directionY: 1,
<<<<<<< HEAD
    speedX: 0.1,
    speedY: 2.1,
=======
    speedX: 3,
    speedY: 5,
>>>>>>> 8df5e9facf2cf56ae3b477a8b9e580c41a9e1f6e
    ray: 25
}

function checkLimitsSMDavid() {
    if (davidMove.x >= right - davidMove.ray || davidMove.x <= leftAndTop + davidMove.ray) {
        davidMove.directionX *= -1;
    }

    davidMove.x += davidMove.directionX * davidMove.speedX;

    if (davidMove.y <= leftAndTop + davidMove.ray) {
        davidMove.directionY *= -1;
    }

    //check limits for paddle
    if (davidMove.y == pdDavid.y-davidMove.ray && davidMove.x >= pdDavid.x  && davidMove.x <= pdDavid.x+pdDavid.width) {
        if(davidMove.x >= pdDavid.x  && davidMove.x <= pdDavid.x+pdDavid.width/3){
            davidMove.speedX=3;
            if(davidMove.directionX==1)
                davidMove.directionX*=-1;
        }
        if(davidMove.x>pdDavid.x+pdDavid.width/3 && davidMove.x <=pdDavid.x+pdDavid.width/1.5){
            if(davidMove.speedX>0)
                davidMove.speedX=0;
        }
        if(davidMove.x >pdDavid.x+pdDavid.width/1.5 && davidMove.x <= pdDavid.x+pdDavid.width){
            davidMove.speedX=3;
            if(davidMove.directionX==-1)
                davidMove.directionX*=-1;
        }

        davidMove.directionY *= -1;
    }

    davidMove.y += davidMove.directionY * davidMove.speedY;

}

function smilyFaceDavid(x, y) {
    stroke("black");
    fill("yellow");
    ellipse(x, y, davidMove.ray * 2); // Face ellipse

    // Drawing the eyes
    stroke("black");
    fill("white");
    ellipse(x - (davidMove.ray * 2) / 5, y - (davidMove.ray * 2) / 5, (davidMove.ray * 2) / 5, (davidMove.ray * 2) / 5); // Left eye
    ellipse(x + (davidMove.ray * 2) / 5, y - (davidMove.ray * 2) / 5, (davidMove.ray * 2) / 5, (davidMove.ray * 2) / 5); // Right eye

    // Pupils
    fill("red");
    circle(x - (davidMove.ray * 2) / 5, y - (davidMove.ray * 2) / 5, (davidMove.ray * 2) / 10);
    circle(x + (davidMove.ray * 2) / 5, y - (davidMove.ray * 2) / 5, (davidMove.ray * 2) / 10);

    // Drawing the mouth
    noFill();
    stroke("black");
    arc(x, y + davidMove.ray / 5, davidMove.ray, (davidMove.ray * 2) * 12 / 100, 0, PI); // Smile arc
}