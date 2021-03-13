class Block {
    constructor(x,y,w,h) {
        this.body = Bodies.rectangle(x,y,w,h,{restitution:0.001});
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }
    display() {
        push();
        rectMode(CENTER);
        strokeWeight(3);
        rotate(this.body.angle);
        fill('red');
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}