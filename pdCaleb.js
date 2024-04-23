let pdCalebWidth = 100;
let paddleLeftCaleb = pdCalebWidth /3;
let paddleMiddleCaleb = paddleLeftCaleb * 2;
let paddleRightCaleb = pdCalebWidth

let pdCaleb = {
    x: right / 2,
    y: 450,
    width: pdCalebWidth,
    height: 5,
    color: "red",
    left: paddleLeftCaleb,
    middle: paddleMiddleCaleb,
    right: paddleRightCaleb
    

}

function drawPaddleCaleb() {
    fill(pdCaleb.color)
    pdCaleb.x = mouseX - pdCaleb.width / 2;
    rect(pdCaleb.x, pdCaleb.y, pdCaleb.width, pdCaleb.height)
}