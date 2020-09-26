class box {
    constructor(x,y,width,height){
        var options = {
            restitution : 1
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        world.add(world1,this.body );
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill (255);
        rect(0, 0, this.width, this.height);
        pop()
    }
}