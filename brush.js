class Brush {
  constructor(x, y, r) {
    this.body = Bodies.circle(x, y, r);
    this.body.restitution = 1;
    this.color = color(random(255), random(255), random(255));

    

    // Nella classe brush.js, aggiungi un listener per gli eventi 
    // di collisione. Puoi utilizzare Matter.Events.on per 
    // ascoltare l'evento 'collisionStart' e verificare se uno 
    // dei corpi coinvolti nella collisione è il corpo del pennello.


    // Subscribe to collision events
    Matter.Events.on(engine, 'collisionStart', (event) => {
      let pairs = event.pairs;
      for (let pair of pairs) {
        if (pair.bodyA === this.body || pair.bodyB === this.body) {
            this.onCollision();
        }
      }
    });

  }

  draw() {
    this.keepInBounds();
    noStroke();
    fill(this.color);
    circle(this.body.position.x, this.body.position.y, this.body.circleRadius * 2);
  }

  onCollision() {
    this.color = color(random(255), random(255), random(255));
  }

  keepInBounds() {
    let pos = this.body.position;
    let r = this.body.circleRadius;

        if(pos.x > width - r) {
            Body.setPosition(this.body, {x: width - r, y: pos.y});
            Body.setVelocity(this.body, {x: 0, y: this.body.velocity.y});
        }
        if(pos.x < r) {
            Body.setPosition(this.body, {x: r, y: pos.y});
            Body.setVelocity(this.body, {x: 0, y: this.body.velocity.y});
        }
        if(pos.y > height - r) {
            Body.setPosition(this.body, {x: pos.x, y: height - r});
            Body.setVelocity(this.body, {x: this.body.velocity.x, y: 0});
        }
        if(pos.y < r) {
            Body.setPosition(this.body, {x: pos.x, y: r});
            Body.setVelocity(this.body, {x: this.body.velocity.x, y: 0});
        }
    }

}