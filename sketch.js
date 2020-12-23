
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground, chain
var mango, mango2, mango3, mango4, stone;
var boyImg, treeImg;

function preload()
{
	boyImg = loadImage ("boy.png")
	treeImg = loadImage ("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground (400,650,800,20)

  mango = new Mango(560,350,20)
  mango2 = new Mango (600,300,20)
  mango3 = new Mango (700, 360,20)
  mango4 = new Mango (480, 270,20)

	stone = new Stone(82,500,10)

	chain = new Slingshot(stone.body, {x : 82, y : 500})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  imageMode(CENTER)
  image(boyImg, 150, 570, 200, 300)
  image(treeImg, 600, 400, 400,500)

  ground.display();

  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();

  stone.display();

  chain.display();
  
  detectCollision(stone,mango)
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition (stone.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
    chain.fly()
}

function keyPressed () {
  if (keyCode === 32){
    chain.attach(stone.body)
  }
}

function detectCollision (stone, mango){
  mangoPos = mango.body.position
  stonePos = stone.body.position

  var distance = dist (stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)

  if (distance <= mango.r + stone.r){
    Matter.Body.setStatic(mango.body, false)
  }
}

