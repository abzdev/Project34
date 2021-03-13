const World = Matter.World,
Engine = Matter.Engine,
Bodies = Matter.Bodies,
Body = Matter.Body,
Constraint = Matter.Constraint;
var engine, world;
var superHeroImg, monsterImg, bg;
var superHero, monster;
var stack1 = [];
var stack2 = [];
var ground;

function preload() {
  superHeroImg = loadImage('images/superHero.png');
  monsterImg = loadImage('images/monster.png');
  bg = loadImage('images/bg.jpeg');
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1500, 750);


  for (var i = 520; i > 200; i -= 55) {
    stack1.push(new Block(width/2,i,50,50));
  }
  for (var i = 520; i > 200; i -= 55) {
    stack2.push(new Block(width/2+60,i,50,50));
  }

  ground = Bodies.rectangle(width/2,3*height/4,width,20, {isStatic:true});
  superHero = Bodies.rectangle(width/4,height/2,100,50);
  World.add(world,[ground,superHero]);
}

function draw() {
  rectMode(CENTER);
  background(bg);

  for (var i = 0; i < stack1.length; i++) {
    stack1[i].display();
  }
  for (var i = 0; i < stack2.length; i++) {
    stack2[i].display();
  }

  fill(0);
  rect(ground.position.x,ground.position.y,width,20);
  rect(superHero.position.x,superHero.position.y,100,50);
}

