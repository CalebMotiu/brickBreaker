let bricksCaleb = []

const brickRowCaleb = 1
const brickColumnCaleb = 1
const numberOfRows = 4

function initBricksCaleb() {
    for (let i =0; i < brickRowCaleb * numberOfRows; i++)
        {
            bricksCaleb.push({
                hit: false,
                x: i*70,
                y: 15,
                color: "red",
                width: 50,
                height: 20
            })
        }
}

function createBricksCaleb(){
    bricksCaleb.forEach(brick => {
        fill (brick.color);
        rect (brick.x, brick.y, brick.width, brick.height)
    })
}