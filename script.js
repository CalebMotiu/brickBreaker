function setup(){
    createCanvas(800,600);
}

function draw(){
    //head
    background("grey")
    
    smilyFaceCaleb()


    //shape
    fill("silver");
    circle(100,100,40);
    fill("white");
    quad(80,100,120,100,120,150,80,150);
    quad(70,100,80,100,80,155,70,155);
    quad(120,100,130,100,130,155,120,155);
    quad(70,155,80,155,82,162,68,162);
    quad(120,155,130,155,132,162,118,162);
    quad(85,150,115,150,110,155,90,155);
    quad(95,155,105,155,110,160,90,160);
    //head
    fill("blue")
    stroke("blue")
    arc(100, 85,23,9,PI,TWO_PI)
    rect(81,93,38,8,6,6,0,0)
    rect(97,87,8,7)
    fill("black")
    circle(100,90,6)
    fill("grey")
    circle(110,97,7)
    //body
    fill("blue")
    rect(90,103,22,2)
    rect(90,107,22,2)
    rect(90,111,22,2)
    rect(97,117,6,12)
    fill("grey")
    stroke("grey")
    rect(98,118,4,4,1,)
    rect(98,124,4,4,1,)


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