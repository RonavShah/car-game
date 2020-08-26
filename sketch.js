var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var loc = database.ref("ball/position");
    loc.on("value",readOp,showerr);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){                
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function changePosition(x,y){
   
    database.ref("ball/position").set({x:ball.x + x, y:ball.y + y})
}

function readOp(data){

position = data.val();

ball.x = position.x;
ball.y = position.y;

}

function showerr(){

console.log("error");
}