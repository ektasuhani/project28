class Mango{
    constructor(x,y){
      var options ={
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }  
      this.body=Bodies.circle(x,y,20,options);
      this.radius=20
      this.image=loadImage("sprites/mango.png");
      World.add(world,this.body);
        
    }
    display(){
        push ();
       
         imageMode (CENTER);
         image (this.image,this.body.position.x,this.body.position.y,20,20);
         pop ();
    }
}