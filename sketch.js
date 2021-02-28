const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var ground
var engine,world;
 var slingshot, ball;

var block1 
function preload(){

}
function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  //creating ground
  ground=new Ground(540,351,190,20)
  
  block1= new Ground(471,325,20,20)
  block2= new Ground(499,325,20,20)
  block3= new Ground(527,325,20,20);
  block4= new Ground(555,325,20,20);
  block5= new Ground(583,325,20,20);
  block6= new Ground(611,325,20,20);
  // creating second layer
  block7= new Ground(486,303,20,20);
  block8= new Ground(514,303,20,20);
  block9= new Ground(539,303,20,20);
  block10= new Ground(567,303,20,20);
  block11= new Ground(595,303,20,20);
  // creating the third layer 
  block12= new Ground(500,281,20,20);
  block13= new Ground(528,281,20,20);
  block14= new Ground(556,281,20,20);
  block15= new Ground(584,281,20,20);
  // creating the fourth layer 
  block16= new Ground(513,259,20,20);
  block17= new Ground(541,259,20,20);
  block18= new Ground(570,259,20,20);
  // creating the fifth layer
  block19= new Ground(528,237,20,20);
  block20= new Ground(556,237,20,20);
  // creating the top
  block21= new Ground(540,216,20,20);

  ball= Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot= new SlingShot(this.ball,{x:200,y:200})
}

function draw() {
  background("rgb(127,255,212)");
  Engine.update(engine);  
  ground.display();
  stroke(20)
  fill("orange")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  // creating second layer
  fill("red")
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  // creating the third layer 
  fill("yellow")
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  // creating the fourth layer 
  fill("blue")
  block16.display();
  block17.display();
  block18.display();
  // creating the fifth layer
  fill("deepPink")
  block19.display();
  block20.display();
  // creating the top
  fill("tomato")
  block21.display();
  fill("khaki")

  ellipse(ball.position.x,ball.position.y,20);
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}