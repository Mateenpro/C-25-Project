class Cloud{
  constructor(x,y,width,height)  {
      var options = {
         isStatic: false
      }
      this.body = this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = this.widht 
      this.height = this.height 
      this.image = loadImage("assets/cloud.png.png")

      World.add(world,this.body)     
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
}