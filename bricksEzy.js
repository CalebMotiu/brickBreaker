let bricksEzy = []

const margin = 10;
const brickRowDavid = 1
const numberOfRowsDavid = 4

function initBricksEzy() {
    let x = 0;
    for (let i = 0; i < brickRowEzy * numberOfRowsEzy; i++) {
        const row = Math.floor(i / numberOfRowsEzy) + 1;
        let x = 0;
        if (i % numberOfRowsEzy == 0)
            x = 0;
        x = x + 70;
        bricksEzy.push({
            hit: false,
            x,
            y: row * 15,
            color: "blue",
            width: 50,
            height: 20,
            row: row,
        })
    }

}

function createBricksEzy() {
    bricksEzy.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}