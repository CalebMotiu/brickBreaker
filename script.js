function setup(){
    createCanvas(800,600);
}

function draw(){
    //head
    background("grey")
    smilyFaceEzy(400,300);
    //smilyFaceCaleb()
   

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
function smilyFaceEzy(x,y) {
    background(220);
    
  
    fill(255, 255, 0); 
    ellipse(x, y, 50); 
    
    
    fill(0); 
    ellipse(x,y, 50); 
    ellipse(x, y, 50); 
    
    noFill();
    stroke(0); 
    strokeWeight(5);
    arc(200, 250, 100, 100, 0, PI); 
  }
