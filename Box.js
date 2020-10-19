class Box{
    constructor(x,y) {
        var opt={
            restitution:0.5,
            friction:1
        };
        this.body=Bodies.rectangle(x,y,50,50,opt);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,50,50);
    }
}