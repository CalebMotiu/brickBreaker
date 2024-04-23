let rectSizeX = 250;
let rectSizeY = 100;

function verifyWinningCaleb() {
    let conterOfHitBoxesCaleb = 0;
    if (smCaleb.y > bottom + (smCaleb.diameter / 2)) {
        fill("aqua")
        rect((right / 2 - rectSizeX / 2), (bottom / 2 - rectSizeY / 2), rectSizeX, rectSizeY)
        fill("black")
        textSize(20);
        text("YOU LOSE", (right / 2 - 50), (bottom / 2 + 10)); 
        stopsgame;
    }

    bricksCaleb.forEach(brick => {
        if (brick.hit == true)
        conterOfHitBoxesCaleb++;
        if (conterOfHitBoxesCaleb == numberOfColumns * numberOfRows){
            fill("aqua")
            rect((right / 2 - rectSizeX / 2), (bottom / 2 - rectSizeY / 2), rectSizeX, rectSizeY)
            fill("black")
            textSize(20);
            text("YOU WIN", (right / 2 - 50), (bottom / 2 + 10)); 
            stopsgame;
        }
    })
}