let bricksCaleb = []

const margin = 10
const distanceBetweenBricks = 10

const numberOfColumns = 4
const numberOfRows = 8

const brickWidth = Math.floor((right - margin * 2 - (numberOfRows - 1) * distanceBetweenBricks)/numberOfRows);


function initBricksCaleb() {
    let x = margin;
    for (let i = 0; i < numberOfColumns * numberOfRows; i++)
        {
            const row = Math.floor(i/numberOfRows) + 1;

            x = x + brickWidth + distanceBetweenBricks;
            if (i % numberOfRows == 0)
                x = margin;
        
            bricksCaleb.push({
                hit: false,
                x,
                y: row * 30,
                color: "red",
                width: brickWidth,
                height: 20,
                row
            })
        }
}

function createBricksCaleb(){
    bricksCaleb.forEach(brick => {
        fill (brick.color);
        rect (brick.x, brick.y, brick.width, brick.height)
    })
}