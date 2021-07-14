class Bar{
    constructor(x, y, width, height) {

        grassImg=loadImage("images/grass.jpg");
        
        
        
       

        this.body = createSprite(x, y, width, height);
        //this.body.addImage(grassImg);
        //this.body.scale=0.1;
        //image(grassImg,x,y,width,height);
        this.body.shapeColor= "green"
        

        grassGroup.add(this.body);

       
    
    }

    display(){

        this.body.visible=true;


       
    }

    noDisplay(){
        this.body.visible=false;

    }
}


