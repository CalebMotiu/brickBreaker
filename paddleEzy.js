let pdEzy = {
    x: right/2,
    y: 500,
    color: "black",
    width: 100,
    height: 5,
}

function createPaddleEzy(){
    pdEzy.x=mouseX-pdEzy.width/2;
    
    fill (pdEzy.color);
    rect (pdEzy.x, pdEzy.y, pdEzy.width, pdEzy.height);
    createMiddlePaddleEzy();
}
function createMiddlePaddleEzy(){
    fill("red");
    var u=pdEzy.x+pdEzy.width/3
    rect(u , pdEzy.y, pdEzy.width-66, pdEzy.height)
}