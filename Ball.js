class Ball{
    constructor(x, y, radius){

        var options ={
            restitution:0.8,
            frictionAir: 0.0005,
            density: 1
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("grey");
        fill("silver");
        ellipse(0, 0 , this.radius, this.radius);
        pop()

    }
}