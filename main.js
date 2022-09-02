function preload(){
    img= loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",100,100);
    noFill("");
    rect(90,90,300,300);
    stroke("orange");

    fill("red");
    text("meow",300,100);
    noFill("");
    rect(300,90,300,300);
    stroke("orange");
}