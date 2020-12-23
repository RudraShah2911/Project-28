class Mango  {

    constructor(x,y,r){
        var ops = {
            isStatic : true,
        }
        
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r, ops)
        this.image = loadImage("mango.png")
        World.add(world, this.body)
    }
    display(){
        var mangopos = this.body.position

        push()
        translate(mangopos.x, mangopos.y)
        ellipseMode(RADIUS)
        strokeWeight(1)
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        imageMode(CENTER)
        image(this.image, 10, 0, this.r*3, this.r*3)
        pop()
    }
}