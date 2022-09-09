img = "";
objects = [];
status1 = "";
function preload(){
    img = loadImage("images.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects!";
}
function modelLoaded(){
    console.log("Model Loaded Boi!");
    status1 = true;
    objectDetector.detect(img,gotPoses);
}
function gotPoses(error,results){
    if(error){
        console.log("errorrrrrr");
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
        document.getElementById("status").innerHTML = "Status : Object Detected!";
        for(K= 0; K<objects.length; K++ ){
            fill("red");
            percent = floor(objects[K].confidence*100)
            noStroke();
            text(objects[K].label +" "+percent+"%",objects[K].x+10,objects[K].y+10);
            noFill();
            stroke("orange");
            rect(objects[K].x, objects[K].y, objects[K].width, objects[K].height);
        }
    }

}
