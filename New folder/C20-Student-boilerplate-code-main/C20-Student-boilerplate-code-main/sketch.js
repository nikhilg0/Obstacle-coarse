// create class for walls
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lava
let engine;
let world;
var ball;

var ground;
var ground1
var button
var wall
var ceiling
var angle = 180
function setup() {
  createCanvas(windowWidth,windowHeight-5);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
 
   var ground_options ={
     isStatic: true

   };
   var ground1_options ={
    isStatic: false

  };
  var button_options ={
    isStatic: false,
   restitution: 3,
   density:111,
   frictionAir:0.1
  };
  var wall_options ={
    isStatic: true,
   restitution: 1,
   
   
  };
  var ceiling_options ={
    isStatic: true
 
  }
  ground = Bodies.rectangle(500,390,2100,20,ground_options);
  World.add(world,ground);
 
  ground1 = Bodies.rectangle(500,340,20,100,ground1_options);
  World.add(world,ground1);
  button = Bodies.rectangle(10,340,20,100,button_options);
  World.add(world,button);
  wall = Bodies.rectangle(700,-200,20,1000,wall_options);
  World.add(world,wall);
  ceiling = Bodies.rectangle(500,-300,2100,20,ceiling_options);
  World.add(world,ceiling);
  lava = Bodies.rectangle(0,500,10,1000,ceiling_options);
  World.add(world,lava);
  ball = Bodies.circle(100,10,20,ball_options);

  World.add(world,ball);
 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(1);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,2100,20);
  rect(ground1.position.x,ground1.position.y,20,100);
  rect(button.position.x,button.position.y,20,100);
  rect(wall.position.x,wall.position.y,20,1000);
  rect(lava.position.x,lava.position.y,10,1000);

followBall()
if (keyCode === 32){
  console.log("space pressed")
  lava.x=lava.x+5
}

}

function keyPressed() {
  var newAngle = 10;
  var velocity;

  if (keyCode === RIGHT_ARROW) {
    //newAngle = newAngle*(3.14/180);
    //var velocity = p5.Vector.fromAngle(newAngle);

    console.log("key pressed");
    console.log("newAngle: " + newAngle + " velocity: " + velocity);
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0})
  }

  if (keyCode === LEFT_ARROW) {
    //newAngle = newAngle*(3.14/180);
    //var velocity = p5.Vector.fromAngle(newAngle);

    console.log("key pressed");
    console.log("newAngle: " + newAngle + " velocity: " + velocity);
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.001,y:0})
  }

}
function followBall(){
  camera.x += 2
}

  