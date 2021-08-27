class Snow{

    constructor( x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp") ;
        // snow.velocityY = 3 ;
    }

    display(){
        imageMode(CENTER);
        // snow.velocityY = 3 ;
        console.log("this display function is working properly")
        image(this.image, this.x , this.y, this.width, this.height);
    }

}