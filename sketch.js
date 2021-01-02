const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;

var thunder1Image, thunder2Image, thunder3Image, thunder4Image;
var maxDrops=100;
var drops, umbrella;
var dropsArray=[];

function preload(){
    thunder1Image=loadImage("thunderbolt/1.png");
    thunder2Image=loadImage("thunderbolt/2.png");
    thunder3Image=loadImage("thunderbolt/3.png");
    thunder4Image=loadImage("thunderbolt/4.png");   
}

function setup(){
    createCanvas(600,600);

    engine=Engine.create();
    world=engine.world;

    if(frameCount%150===0){
        for(var i=0;i<maxDrops;i=i+1){
            drops=new Drops(random(0,300),random(0,400));
            dropsArray.push(drops);
            //dropsArray.push(new Drop());
        }
    }

    umbrella=new Umbrella(200,470);    
}

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
    for(var i=0;i<maxDrops;i=i+1){
        //if(frameCount%50===0){
        dropsArray[i].display();
        dropsArray[i].update();
        //}
    }
    
   thunder();
   drawSprites();   
}   

function thunder(){

    if(frameCount%50==0){
        var thunder=createSprite(random(10,400),random(10,30),10,10);
        
        var rand=Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1Image);
                    //thunder.scale=0.5;
                    break;
            case 2: thunder.addImage(thunder2Image);
                    //thunder.scale=0.5;
                    break;  
            case 3: thunder.addImage(thunder3Image);
                    //thunder.scale=0.5;
                    break;
            case 4: thunder.addImage(thunder4Image);
                    //thunder.scale=0.5;
                    break;
            default:break;                   
        }
    thunder.scale = random(0.3,0.6);

    thunder.lifetime=12;
    }
}

