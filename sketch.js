
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var side, side2, side3;
var ground;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


    ball = new Ball(150, 640,40)
	side = new sides(930,590,20, 100)
    side2 = new sides(1170,590,20, 100)
	side3 = new sides(1050,630,230, 20)

	ground = new Ground(600, 650, 1200, 20)
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  side.display();
  side2.display();
  side3.display();

  ball.display();
  ground.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:400,y:-250})
    
	}
}



