class Boy{
    constructor(bodyA, pointB, width, height){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 20,
        }
        this.sling1 = loadImage('Plucking_mangoes/boy.png');
         this.width = width;
         this.height = height;
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,100,600,this.width, this.height);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(0);
            if(pointA.x < 220) {
                strokeWeight(7);
                /*line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                */
                
            }
           
           
            
            pop();
        }
    }
    
}