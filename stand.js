class Stand {
  constructor(x,y,w,h){
         
          var options={isStatic:true}
         
          this.body= Bodies.rectangle(x,y,w,h,options);
          World.add(world,this.body);
         
          this.w = w;
          this.h = h;
  }
  display(){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x,this.body.position.y);
         rotate(angle)
          fill("#BC4343");
          rectMode(CENTER);
          noStroke();

          rect(0,0,this.w,this.h );
          pop();
  }
}