
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500, 400, 300, 300);
	stone = new Stone(100, 500, 10, 10);
	ground = new Ground(400, 690, 800, 20);
	boy = new Boy(stone.body, {x:100, y:450},100,120);
	
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  stone.display();
  ground.display();
  boy.display();
  drawSprites();
	boy.debug = true;

 
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    boy.fly();
    
}



