let brickObject = {
    hit:false,
    x:0,
    y:0,
    color: random(),
    width: 50,
    height: 10,
}

let bricks = []
const bricksRows = 1;
const brickCols= 1;
const rowBricksNumber= 4;

function initBricks(){
    for(let i=0;i<bricksRows* rowBricksNumber;i++){
        bricks.push(brickObject);
    }
}

function createBricks(){
    bricks.forEach(brick =>{
        fill(brick.color)
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}
