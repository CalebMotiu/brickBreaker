function setup(){
    createCanvas(800,600);
}

function draw(){
    //head
    background("grey")
    
    smilyFaceCaleb()


    //head
    fill("white");
    circle(100,100,40);
    quad(80,100,120,100,120,150,80,150)
}
function smilyFaceCaleb(){
    stroke("black");
    fill("red");    
    circle(400,500,20);
    //eye
    stroke("black");
    circle(397,497,3);
    circle(403,497,3);
    stroke("blue");
    fill("blue");
    circle(397,497,2);
    circle(403,497,2);

    //mouth
    stroke("black")
    fill("red");
    arc(400,503,10,7,0,PI)
}