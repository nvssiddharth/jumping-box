//creating variables
var ball;
var surface1,surface2,surface3,surface4;
var music,edges;

function preload(){

    //loading sound
   music=loadSound("music.mp3");

}


function setup(){
     createCanvas(800,600);

     //creating edge sprites
     edges=createEdgeSprites();

    //creating 4 different surfaces
    surface1=createSprite(100,580,200,50);
    surface1.shapeColor="red";
    surface2=createSprite(300,580,200,50);
    surface2.shapeColor="yellow";
    surface3=createSprite(500,580,200,50);
    surface3.shapeColor="orange";
    surface4=createSprite(700,580,200,50);
    surface4.shapeColor="green";

    //creating a moving ball
    ball=createSprite(random(20,750),200,25,25);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=5;
}

function draw() {

    //background colour
    background(rgb(169,169,169));

    //bounceoff function for ball
    ball.bounceOff(edges);
     
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor="red";
        music.loop();
    }

    if(surface2.isTouching(ball)){
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor="orange";
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor="green"
    }

    drawSprites();
}


