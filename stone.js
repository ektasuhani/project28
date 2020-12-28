class Stone{
    constructor(){
      var options ={
          isStatic:true,
          restitution:0.8,
          friction:1,
          density:2.0
      }  
      this.body=Bodies.circle(30,520,20,options);
      this.radius=20
      this.image=loadImage("sprites/stone.png");
      World.add(world,this.body);
        
    }
    display(){
        push ();
       
         imageMode (CENTER);
         image (this.image,this.body.position.x,this.body.position.y,20,20);
         pop ();
    }
}