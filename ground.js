class G{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("yellow");
    rect(0,0,this.width,this.height);
    pop();
    }
}