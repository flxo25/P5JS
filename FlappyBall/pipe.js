
function Pipe(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 4;

    this.show = function(){
        fill(255);
        rect(this.x,0,this.w,this.top);
        rect(this.x,height-this.bottom,this.w,this.bottom);
    }

    this.update = function(){
        this.x -= this.speed;
    }

/*    this.offscreen = function(){
        if(this.x < -width){
            return true;
        } else {
            return false;
        }
    }*/

    this.hits = function(ball){
        if(ball.y < this.top || ball.y > height - this.bottom){
            if(ball.x > this.x && ball.x < this.x + this.w){
                return true;
            }
        }
        return false;
    }

}