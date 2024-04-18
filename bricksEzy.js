let bricksEzy = []

const brickRowEzy = 1
const brickColumnEzy = 1
const numberOfRows = 4

function initBricksEzy() {
        for (let i =0; i < brickRowEzy * numberOfRows; i++)
        {
            bricksEzy.push({
                hit: false,
                x: i*70,
                y: 15,
                color: "red",
                width: 50,
                height: 20
            })
        }

}

function createBricksEzy(){
    bricksEzy.forEach(brick => {
        fill (brick.color);
        rect (brick.x, brick.y, brick.width, brick.height)
    })
}