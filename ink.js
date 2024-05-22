class Drop {

    constructor(x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    show() {
        fill(0);
        console.log("show", this.x,this.y,this.r*2)
        circle(this.x,this.y,this.r*2);
    }
}