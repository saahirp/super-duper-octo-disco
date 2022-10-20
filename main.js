song1 = "music.mp3";
song2 = "music2.mp3";

function setup(){
    canvas = createCanvas(505, 505);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}