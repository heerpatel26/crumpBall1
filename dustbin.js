class Dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=200
        this.height=100
        this.thickness=20
        this.angle=0
        this.bottum=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
        this.left=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
        Matter.Body.setAngle(this.left,this.angle)
        this.right=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
        Matter.Body.setAngle(this.right,-1*this.angle)
        World.add(world,this.bottum)
        World.add(world,this.left)
        World.add(world,this.right)
    }
    display(){
        var b=this.bottum.position
        var l=this.left.position
        var r=this.right.position
        push ()
        translate(l.x,l.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.thickness,this.height)
        pop ()
        push ()
        translate(r.x,r.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(-1*this.angle)
        rect(0,0,this.thickness,this.height)
        pop () 
        push ()
        translate(b.x,b.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rect(0,0,this.width,this.thickness)
        pop ()
    }
}