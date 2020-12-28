class Tree{
    constructor(){
      var options ={
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }  
      this.body=Bodies.rectangle(600,450,200,500,options);
     this.width=200
     this.height=500
      this.image=loadImage("sprites/tree.png");
      World.add(world,this.body);
        
    }
    display(){
        push ();
       
         imageMode (CENTER);
         image (this.image,this.body.position.x,this.body.position.y,200,500);
         pop ();
    }
}