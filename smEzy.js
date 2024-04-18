let ezyMove = {
    x: 300,
    y: 300,
    directionX: 1,
    directionY: 1,
    speedX: 3,
    speedY: 5,
    ray: 50
}




function checkLimitsSMEzy() {
    if (ezyMove.x >= right - ezyMove.ray || ezyMove.x <= leftAndTop + ezyMove.ray) {
        ezyMove.directionX *= -1;
    }

    ezyMove.x += ezyMove.directionX * ezyMove.speedX;

    if (ezyMove.y <= leftAndTop + ezyMove.ray) {
        ezyMove.directionY *= -1;
    }

    //check limits for paddle
    if (ezyMove.y == pdEzy.y-ezyMove.ray && ezyMove.x >= pdEzy.x  && ezyMove.x <= pdEzy.x+pdEzy.width) {
        if(ezyMove.x >= pdEzy.x  && ezyMove.x <= pdEzy.x+pdEzy.width/3){
            ezyMove.speedX=3;
            if(ezyMove.directionX==1)
            ezyMove.directionX*=-1;
        }
        if(ezyMove.x>pdEzy.x+pdEzy.width/3 && ezyMove.x <=pdEzy.x+pdEzy.width/1.5){
            if(ezyMove.speedX>0)
            ezyMove.speedX=0;
        }
        if(ezyMove.x >pdEzy.x+pdEzy.width/1.5 && ezyMove.x <= pdEzy.x+pdEzy.width){
            ezyMove.speedX=3;
            if(ezyMove.directionX==-1)
            ezyMove.directionX*=-1;
        }

        ezyMove.directionY *= -1;
    }

    ezyMove.y += ezyMove.directionY * ezyMove.speedY;

}


function smilyFaceEzy(x, y) {

    fill(255, 200, 0);
    ellipse(x, y, (ezyMove.ray * 2));


    fill(5, 0, 0,)
    ellipse(x - (ezyMove.ray * 12) / 100, y - (ezyMove.ray * 2) / 5, (ezyMove.ray * 2) / 10);
    ellipse(x + (ezyMove.ray * 12) / 100, y - (ezyMove.ray * 2) / 5, (ezyMove.ray * 2) / 10);


    stroke(0);
    //strokeWeight(5);
    arc(x, y, (ezyMove.ray * 4) / 5, (ezyMove.ray * 4) / 5, 0, PI);
}