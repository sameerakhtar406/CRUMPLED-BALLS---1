
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var DB1,DB2,D3
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,650,1200,20)

	D1 = new DB(1000,650,200,20)
    D2 = new DB(900,620,20,80)
    D3 = new DB(1100,620,20,80)
    	
    ball = new paper(200,620,39)	
	
	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  ground.display();
  D1.display();
  D2.display();
  D3.display();
  ball.display();
  drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-90});
 } 
}

