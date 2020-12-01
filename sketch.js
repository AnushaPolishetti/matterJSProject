const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
var ground,myoptions,ball,tball;
var myball = [];
var j = 280;
var w = 55;
var h = 55;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createSprite(200, 200, 50, 50);
  myEngine = Engine.create()
  myWorld = myEngine.world;
  myoptions = {
    isStatic : true
  }
  var ball_options = {
    restitution : 0.4,
    angle : 80
  }
  
  ground = Bodies.rectangle((width-width/6)/2,(height - height/5),(width-width/6),20,myoptions);
  World.add(myWorld,ground);
  tball = Bodies.circle(250,140,25,myoptions);
  World.add(myWorld,tball);
  
  for(var i = 0;i<14;i++){
    myball[i]  = Bodies.rectangle(j,200,w,h,ball_options);
    World.add(myWorld,myball[i]); 
    j= j +40;
  }
  console.log( myWorld.bodies);
}

function draw() {
  background("pink");
  Engine.update(myEngine);
  rectMode(CENTER);
  fill(rgb(166,32,32));
  rect(ground.position.x, ground.position.y, (width-width/6), 20);
  ellipseMode(RADIUS);
  ellipse(tball.position.x,tball.position.y,25,25);
  for(var i = 0;i<14;i++){
   rectMode(CENTER);
   fill("white");
   stroke("green");
   strokeWeight(3);
   rect(myball[i].position.x, myball[i].position.y, w, h);
    
  }
  drawSprites();
  
}