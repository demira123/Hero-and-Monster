class Hero{
    constructor(x,y,r){
        var options={
        density:1,
        frictionAir:1
    };
    this.body = Bodies.rectangle(x, y,r,r, options);
    this.y=y;
    this.x=x;
    this.r=r;
    this.image=loadImage("killthemonsterFILE-main/Superhero-01.png")
    World.add(world, this.body)
}
  display(){
    push()
    translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+150, this.r);
    pop()
  }}


