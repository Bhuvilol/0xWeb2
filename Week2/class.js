class Rectangle {
    constructor(width,height,color) {
        this.width = width;
        this.height=height;
        this.color=color;
    }
    area(){
        const area = this.width * this.height
        return area;
    }
    paint(){
        console.log(`painting with color ${this.color}`);
    }
}
const rect = new Rectangle(10,20,'red');
const area = rect.area();
console.log(area);
rect.paint();

const now = new Date();
console.log(now);
console.log(now.getDay);
console.log(now.getMonth());
console.log(now.getFullYear());