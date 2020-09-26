const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var engine1, world1 ;
var ground1;
var ball;
var box1, box2;

function setup() {
  createCanvas(400,400);
  engine1 = engine.create();
  world1 = engine1.world ;
box1 = new box(200, 300, 50, 50);  
box2 = new box(240, 100, 50, 100);
ground1 = new ground(200, 390, 400, 20);
}

function draw() {
  background("black"); 
  engine.update(engine1); 
 box1.display();
 box2.display();
 ground1.display();
}