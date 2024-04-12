let pdDavid = {
    x: right/2,
    y: 500,
    color: "black",
    width: 100,
    height: 5,
}

function createPaddleDavid(){
    pdDavid.x=mouseX-pdDavid.width/2;
    
    fill (pdDavid.color);
    rect (pdDavid.x, pdDavid.y, pdDavid.width, pdDavid.height);
    createMiddlePaddleDavid();
}
function createMiddlePaddleDavid(){
    fill("red");
    var u=pdDavid.x+pdDavid.width/3
    rect(u , pdDavid.y, pdDavid.width-66, pdDavid.height)
}