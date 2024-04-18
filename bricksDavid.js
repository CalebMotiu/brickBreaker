let bricksDavid = []

const distanceBetweenBricks = 10;
const marginDavid = 10;
const brickRowDavid = 1
const numberOfRowsDavid = 1

const brickWidth = Math.floor(right - marginDavid * 2 - (numberOfRowsDavid - 1) * distanceBetweenBricks) / brickRowDavid;

function initBricksDavid() {
    let x = marginDavid;
    for (let i = 0; i < brickRowDavid * numberOfRowsDavid; i++) {
        const row = Math.floor(i / numberOfRowsDavid) + 1;
        let x = 0;
        if (i % numberOfRowsDavid == 0)
            x = 0;
        x = x + brickWidth + distanceBetweenBricks;
        bricksDavid.push({
            hit: false,
            x,
            y: row * 15,
            color: "blue",
            width: brickWidth,
            height: 20,
            row: row,
        })
    }

}

function createBricksDavid() {
    bricksDavid.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}