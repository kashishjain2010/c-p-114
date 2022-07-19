moustacheX=0;
moustacheY=0;

function preload(){
    funny_moustache = loadImage('')

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
   image(funny_moustache, moustacheX, moustacheY, 40, 40);

}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length >0)
    {
        console.log(results);
        moustacheX= results[0].pose.moustache.x-15;
        moustacheY= results[0].pose.moustache.y-15;
      console.log("moustache x = " + moustacheX);
      console.log("moustache y = " + moustacheY);


    }
}



