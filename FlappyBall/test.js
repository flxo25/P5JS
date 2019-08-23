var ball;
var pipes = [];

function setup(){
    createCanvas(400,600);
    ball = new ball();
    pipes.push(new Pipe());
}

function draw(){
    background(52, 153, 235);    

    for(var i = pipes.length-1;i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(ball)){
            console.log("GAME OVER");
        }

        if(pipes[i].x < -width){
            pipes.splice(i,1);
        }
    }


    ball.show();
    ball.update();

    if(frameCount % 60 == 0){
        pipes.push(new Pipe());
    }

}

function keyPressed(){
    if(key = " "){
        ball.up();
    }
}

