let bricksDavid = [];

const marginDavid = 10;
const distanceBetweenBricksDavid = 10;

const bricksRowsDavid = 3;
const rowBricksNumberDavid = 7;

const brickWidthDavid = Math.floor(
    (right -
        marginDavid * 2 -
        (rowBricksNumberDavid - 1) * distanceBetweenBricksDavid) /
    rowBricksNumberDavid
);

function initBricksDavid() {
    let x = marginDavid;
    for (let i = 0; i < bricksRowsDavid * rowBricksNumberDavid; i++) {
        const row = Math.floor(i / rowBricksNumberDavid) + 1;

        x = x + brickWidthDavid + distanceBetweenBricksDavid;
        if (i % rowBricksNumberDavid == 0) x = marginDavid;

        bricksDavid.push({
            hit: false,
            x,
            y: row * 35,
            color: "#0000ff",
            width: brickWidthDavid,
            height: 20,
            row,
        });
    }
}

function createBricksDavid() {
    bricksDavid.forEach((brick) => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height);
    });
}