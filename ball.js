class Ball{
    constructor(x,y,radius){
        var option = {
            restitution : 0.3,
            density : 1.22,
            friction : 0.5
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        ellipseMode(RADIUS);
        fill("pink");
    ellipse(0,0,this.radius);
    pop();
    }
}