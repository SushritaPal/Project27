
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=100;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObj1 = new Bob(200,500,50);
	bobObj2 = new Bob(300,500,50);
	bobObj3 = new Bob(400,500,50);
	bobObj4 = new Bob(500,500,50);
	bobObj5 = new Bob(600,500,50);
	roofObj = new Roof(400,150,500,62);
	rope1 = new Rope(bobObj1.body,roofObj.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObj2.body,roofObj.body,-bobDiameter,0);
	rope3 = new Rope(bobObj3.body,roofObj.body,0,0);
	rope4 = new Rope(bobObj4.body,roofObj.body,bobDiameter,0);
	rope5 = new Rope(bobObj5.body,roofObj.body,bobDiameter*2,0);
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(205,205,205);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roofObj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
function keyPressed(){
	
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-300,y:-200});
		

	}
}


