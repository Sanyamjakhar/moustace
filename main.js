function preload(){

}

function draw(){
    image(cam, 0, 0, 300, 300)
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    cam = createCapture(VIDEO)
    cam.size(300, 300)
    cam.hide()
    posenet = ml5.poseNet(cam, modelLoaded)
    posenet.on('pose', gotposes)
}

function modelLoaded() {
    console.log("modelLoaded")
}

function gotposes(result) {
    console.log(result)
    console.log("nose x =" + result[0].pose.nose.x)
    console.log("nose x =" + result[0].pose.nose.y)
}