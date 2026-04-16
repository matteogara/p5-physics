class Obstacle {
  constructor(x, y, w, h, angle = 0) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);
    this.body.isStatic = true;
    Body.setAngle(this.body, angle);
  }

  draw() {
    rectMode(CENTER);
    fill(0, 255, 0);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    translate(-this.body.position.x, -this.body.position.y);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
  }
}