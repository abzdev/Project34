const World = Matter.World,
Engine = Matter.Engine,
Bodies = Matter.Bodies,
Body = Matter.Body,
Constraint = Matter.Constraint;
var engine, world;
var superHero, monster, bg;
var block1;

function preload() {
  superHero = loadImage('images/superHero.png');
  monster = loadImage('images/monster.png');
  bg = loadImage('images/bg.jpeg');
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1500, 750);

  block1 = new Block(width/2,height/2,50,50);

}

function draw() {
  background(bg);
  block1.display();
  console.log(block1.body.position.y);
}

