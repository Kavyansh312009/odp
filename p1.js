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
}