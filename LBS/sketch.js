let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
let video = document.querySelector('#video');
let poseNet;
let pose;

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    })
}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        draw();
    }
}

function draw() {
    console.log("In draw function");
    console.log(pose);
    if (pose) {
        fill(255, 0, 0);
        ellipse(pose.nose.x, pose.nose.y, 64);
    }
}

function modelLoaded() {
    console.log("Model Loaded");
}