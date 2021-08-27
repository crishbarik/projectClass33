var bg;
var snow;
var snowImg;

function preload(){
  bg   = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}


function setup(){
  createCanvas(2132,1075);
  console.log("this jiuiddfgio");
  // snow = new Snow(200,20,100,100);(0,Math.round(random(20, 370)), 10, 10)
  // snow = createSprite(Math.round(random(10,2122)), Math.round(rand(0,10)),100,100); 
  // snow.addImage(snowImg);
  // snow.scale = 0.2;
  sImg = new Group()

  console.log("this is not working");
}

function draw(){
  background(bg);

  // snow.velocityY = 3 ;
  // snow.display();
  repeatSnow();
  drawSprites();
}

 function repeatSnow(){
  console.log("function repeat is working");
  // var snow = createSprite(200,200,100,100);
  var snow = createSprite(Math.round(random(10,2122)),10,100,100);
  snow.addImage(snowImg);
  snow.velocityY = 2;
  snow.lifetime = 1000;
  snow.scale = 0.2;
  sImg.add(snow);

 }