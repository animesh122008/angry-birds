const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var object ;
var ground
var ball
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options={
    restitution:0.8
    
  }
  var options1={
    isStatic:true
  }
  object=Bodies.rectangle(200,300,50,60,options);
  World.add(world,object)
  ground=Bodies.rectangle(400,360,800,50,options1)
  World.add(world,ground)
  ball=Bodies.circle(200,200,20,options)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);
 Engine.update(engine)
rectMode(CENTER)
rect(object.position.x,object.position.y,50,60)
rect(ground.position.x,ground.position.y,800,50)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();

}
