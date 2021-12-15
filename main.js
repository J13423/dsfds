canvas = document.getElementById("myCanvas");
document.body.style.overFlow = "hidden";
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight = 100;
roverX = 0;
roverY = 0;
backgroundImages = "mars.jpg";
roverImage = "rover.png";
function add(){
    backgroundImagestag = new Image();
    backgroundImagestag.onload = uploadBackground;
    backgroundImagestag.src = backgroundImages;
    roverImagetag = new Image();
    roverImagetag.onload = uploadRover;
    roverImagetag.src = roverImage;
}
function uploadBackground(){
    ctx.drawImage(backgroundImagestag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverImagetag, roverX, roverY, roverWidth, roverHeight);
}
window.addEventListener("keydown", keyDown);
function keyDown(e){
    keyPressed = e.keyCode;
    if(keyPressed == "38"){
        up();
        console.log("up")
    }
    if(keyPressed == "40"){
        down();
        console.log("down")
     
        
        
    }
    if(keyPressed == "37"){
        left();
        console.log("left")
        
         
    }
    if(keyPressed == "39"){
        right();
        console.log("right")
        
        
    }

}
function up(){
    if(roverY >= 0){
    roverY = roverY - 10;
    console.log("Up pressed event" + roverX +" " + roverY);
    uploadBackground();
    uploadRover();

    }
}
function down(){
    if(roverY <= 500){
    roverY = roverY + 10;
    console.log("Down pressed event" + roverX +" " + roverY);
    uploadBackground();
    uploadRover();

    }
}
function left(){
    if(roverX >= 0){
    roverX = roverX - 10;
    console.log("left pressed event" + roverX +" " + roverY);
    uploadBackground();
    uploadRover();

    }
}
function right(){
    if(roverY <= 700){
    roverX = roverX + 10;
    console.log("Up pressed event" + roverX +" " + roverY);
    uploadBackground();
    uploadRover();

    }
}