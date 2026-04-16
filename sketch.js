let Engine = Matter.Engine,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;

let engine;

let brush;
let obstacle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();

  brush = Bodies.circle(width / 2, height / 4, 50);

  obstacle = Bodies.rectangle(width /2, 600, 300, 50);
  obstacle.isStatic = true;

  Body.setAngle(obstacle, PI /6);

  console.log(obstacle); 

  Composite.add(engine.world, [brush, obstacle]);
}

function draw() {
  background(220);

  noStroke();
  fill(255, 0, 0);
  circle(brush.position.x, brush.position.y, brush.circleRadius * 2);

  rectMode(CENTER);
  fill(0, 255, 0);

  translate(obstacle.position.x, obstacle.position.y);
  rotate(obstacle.angle);
  translate(-obstacle.position.x, -obstacle.position.y);

  rect(obstacle.position.x, obstacle.position.y, 300, 50);

  Engine.update(engine);
}
