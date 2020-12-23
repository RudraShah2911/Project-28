class Stone  {

    constructor(x,y,r){
        var ops = {
            isStatic : false,
            restitution : 1,
            friction : 0.5,
            density : 0.5
        }
        
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("stone.png")
        this.body = Bodies.circle(this.x, this.y, this.r, ops)
        World.add(world, this.body)
    }
    display(){
        var stonepos = this.body.position

        push()
        translate(stonepos.x, stonepos.y)
        ellipseMode(RADIUS)
        strokeWeight(1)
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r*4, this.r*4)
        pop()
    }
}