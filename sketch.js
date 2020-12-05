const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,box,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1350,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new G(700,550,1400,200);
	ball = new Ball(150,350,25);
	/*box1 = createSprite(1100,445,100,10);
	box2 = createSprite(1050,420,10,60);
	box3 = createSprite(1150,420,10,60);*/
	box1 = new Box(1100,445,100,10);
	box2 = new Box(1050,420,10,60);
	box3 = new Box(1150,420,10,60);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:145,y:-120});

  
	}
}


