let bricksDavid = []

const margin = 10;
const brickRowDavid = 1
const numberOfRowsDavid = 4

function initBricksDavid() {
    let x = 0;
    for (let i = 0; i < brickRowDavid * numberOfRowsDavid; i++) {
        const row = Math.floor(i / numberOfRowsDavid) + 1;
        let x = 0;
        if (i % numberOfRowsDavid == 0)
            x = 0;
        x = x + 70;
        bricksDavid.push({
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

function createBricksDavid() {
    bricksDavid.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}