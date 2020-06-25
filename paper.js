class Paper{
    constructor(x,y,r){
        this.radius=r;

var options={
isStatic:false,
restitution:0.3,
density:1.2,
friction:0.2,

}
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
    }
     display(){
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}