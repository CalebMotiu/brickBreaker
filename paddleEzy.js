let pdEzy = {
    x: right/2,
    y:560,
    color: "black",
    width: 80,
    height: 10,
}

function createPaddleEzy(){
    fill (pdEzy.color);
    rect (mouseX-  pdEzy.right/2 ,  pdEzy.y, pdEzy.right, pdEzy.height);
}