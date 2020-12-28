
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState = "onSling";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	tree = new Tree()
  mangoobject = new Mango(600,300)
  mango2 = new Mango(620,250)
  mango3 = new Mango(590,350)
  mango4 = new Mango(560,400)
  mango5 = new Mango(560,250)
  boy = new Boy();
  stone = new Stone();
  slingShot = new SlingShot(stone.body,{x:50,y:500});
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
  tree.display();
 mangoobject.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 boy.display();
 stone.display();
 slingShot.display();
detectcollision(stone,mangoobject);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);





}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

  slingShot.fly()
  gameState = "launched";
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
console.log("stone")
var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance <= (lmango.r+lstone.r)){
  Matter.Body.setStatic(lmango.body,false);
  console.log("stonecrashed")
}
}


