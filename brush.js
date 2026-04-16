class Brush {
  constructor(x, y, r) {
    this.body = Bodies.circle(x, y, r);
  }

  draw() {
    noStroke();
    fill(255, 0, 0);
    circle(this.body.position.x, this.body.position.y, this.body.circleRadius * 2);
  }
}