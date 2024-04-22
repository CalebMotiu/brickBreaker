let pdCaleb = {
    x: right / 2,
    y: 450,
    width: 100,
    height: 100,
    color: "red"

}

function drawPaddleCaleb() {
    fill(pdCaleb.color)
    pdCaleb.x = mouseX - pdCaleb.width / 2;
    rect(pdCaleb.x, pdCaleb.y, pdCaleb.width, pdCaleb.height)
}