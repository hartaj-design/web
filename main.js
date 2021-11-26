mostachx=0;
mostachy=0;
function preload(){
 pop=loadImage("mostache-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    bot=ml5.poseNet(video,modelloaded);
    bot.on("pose",getanswer);
}
function modelloaded(){
    console.log("model is loaded");
}
function table(){
    save('noor.png');
}
function getanswer(results){
    if(results.length>0){
        console.log(results);
        console.log("mostach_x= "+results[0].pose.nose.x);
        console.log("mostach_y= "+results[0].pose.nose.y);
        mostachx=results[0].pose.nose.x-15;
        mostachy=results[0].pose.nose.y-3;
    }
    
}
function draw(){
    image(video,0,0,300,300);
    image(pop,mostachx,mostachy,30,30);
    }