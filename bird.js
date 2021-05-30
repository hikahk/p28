class Bird {
    constructor(x, y) {
      var options = {
        'density':0.6,
        'friction': 0.63,
        'restitution':0.3,
        isStatic:false

      };
      this.body = Bodies.circle(x, y, 4,  options);
      this.image=loadImage("paper.png")
      //this.width = 50;
      //this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     // pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('grey')
     // rectMode(CENTER)
      //ellipse(0, 0,8,8);
      imageMode(CENTER);
      image(this.image, 0, 0, 50,50);
      pop();
    };
  };
  