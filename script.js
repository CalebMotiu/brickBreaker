function setup(){
    createCanvas(800,600);
}

function draw(){
    //head
    background("grey")
    
    smilyFaceCaleb()


    //head
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
    fill("blue")
 

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