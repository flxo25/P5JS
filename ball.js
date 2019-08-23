function ball(){
    this.y = height/2;
    this.x = 70;

    this.gravity = 0.9;
    this.lift = -15;
    this.velocity = 0;
//    this.lift = -12;

    this.show = function() {
        fill(235, 229, 52);
        stroke(255);
        ellipse(this.x, this.y, 40, 40);
      }

    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity

        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
        
        //console.log(this.velocity);
    }

    this.up = function(){
        this.velocity += this.lift;
        //console.log(this.velocity);
    }
}