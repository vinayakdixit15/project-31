const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight =300


var engine, world

function setup() {
  createCanvas(400,600);
  engine=Engine.create()
  world=engine.world

for (var k=0;k<=width;k=k+80){

  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight)) 

}

for (var k=10;k<=width;k=k+50){

  plinkos.push(new Plinko(k,50)) 

}

for (var k=50;k<=width;k=k+50){

  plinkos.push(new Plinko(k,135)) 
}
for (var k=30;k<=width;k=k+50){

    plinkos.push(new Plinko(k,205)) 
}
for (var k=75;k<=width;k=k+50){

  plinkos.push(new Plinko(k,275)) 
}

ground=new Ground(width/2,height,width,10)

}



function draw() {
  background(0);  
  
  Engine.update(engine)
  ground.display();

for (var j=0;j<divisions.length;j++){

divisions[j].display()

}

for (var j=0;j<plinkos.length;j++){

  plinkos[j].display()
} 

if(frameCount%60==0){

particles.push(new Particle(width/2,10,10))

}

for (var j=0;j<particles.length;j++){

  particles[j].display()

} 




}