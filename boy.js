class Boy{
    constructor(){
      var options ={
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }  
      this.body=Bodies.rectangle(100,600,200,300,options);
     this.width=200
     this.height=300
      this.image=loadImage("sprites/boy.png");
      World.add(world,this.body);
        
    }
    display(){
        push ();
       
         imageMode (CENTER);
         image (this.image,this.body.position.x,this.body.position.y,200,300);
         pop ();
    }
}