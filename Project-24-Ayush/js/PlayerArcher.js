
class PlayerArcher {
  constructor(x, y, width, height,angle) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.angle=angle;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);

  Matter.Body.setAngle(this.body, -90);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle
    console.log(angle)
    
    if (keyIsDown(DOWN_ARROW) && angle < -89) {
      angle += 0.01;
      Matter.Body.setAngle(this.body, angle);
    }
    //&& angle > -103
    if (keyIsDown(UP_ARROW)&& angle > -91 ) {
      angle -=0.01;
     Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
