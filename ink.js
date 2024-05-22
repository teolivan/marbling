const circleDetail = 100;

class Drop {

    constructor(x,y,r) {
        this.center = createVector(x,y);
        this.r = r;

        //polar coordinates
        this.vertices = [];
        for(let i = 0; i < circleDetail; i++) {
            //(iterating over) the perimeters of the circle
            let angle = map(i,0,circleDetail,0,TWO_PI);
            //making a vector from the sin and the cosin of that angle
            let v = createVector(cos(angle), sin(angle));
            //scaling it by the radius
            v.mult(this.r);
            //offset by the center of the circle
            v.add(this.center);
            //putting it into the array
            this.vertices[i] = v;
        }
        this.col = random(0,200);
    }

    marble(other) {
        //formula for marbling
        //iterating over the vertices
        for(let v of this.vertices) {
            let c = other.center;
            let r = other.r;
            let p = v.copy();
            p.sub(c);
            let m = p.mag();
            let root = sqrt(1 + (r*r)/(m*m));
            p.mult(root);
            p.add(c);
            v.set(p);
        }
    }

    show() {
        fill(this.col);
        noStroke();
        beginShape();
        //iterate over vertices
        for(let v of this.vertices) {
            vertex(v.x, v.y);
        }
        endShape();

    }
}