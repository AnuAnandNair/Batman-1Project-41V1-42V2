class Drops{
    constructor(x,y){

        var options={
            friction:0.001,
            restitution:0.1
        }

        this.body=Bodies.circle(x,y,1.5,options);
        this.radius=1.5;
        World.add(world,this.body);   
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }


    display(){
        //if(frameCount%20===0){
            var pos=this.body.position;
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y,this.radius,this.radius);
        //}
    }
}
