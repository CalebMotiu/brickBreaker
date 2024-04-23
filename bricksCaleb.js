let bricksCaleb = []

const marginCaleb = 10
const distanceBetweenBricksCaleb = 10

const numberOfColumns = 4
const numberOfRows = 8

const brickWidthCaleb = Math.floor((right - marginCaleb * 2 - (numberOfRows - 1) * distanceBetweenBricksCaleb)/numberOfRows);


function initBricksCaleb() {
    let x = marginCaleb;
    for (let i = 0; i < numberOfColumns * numberOfRows; i++)
        {
            const row = Math.floor(i/numberOfRows) + 1;

            x = x + brickWidthCaleb + distanceBetweenBricksCaleb;
            if (i % numberOfRows == 0)
                x = marginCaleb;
        
            bricksCaleb.push({
                hit: false,
                x: x,
                y: row * 30,
                color: "red",
                width: brickWidthCaleb,
                height: 20,
                row
            })
        }
}

function calebBrickHit(){
    bricksCaleb.forEach(brick => {
        if (brick.hit == true)
        {
            brick.x = 0;
            brick.width = 0;
        }
    })

}

function createBricksCaleb(){
    bricksCaleb.forEach(brick => {
        fill (brick.color);
        rect (brick.x, brick.y, brick.width, brick.height)
    })
}