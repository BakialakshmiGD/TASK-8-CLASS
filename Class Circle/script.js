class Circle {
    constructor(radius,color){
this.radius = radius;
this.color = color;

}
getRadius() {
return `radius = ${this.radius}` +" "+ `color = ${this.color}`;
}
}

const Circle_Output = new Circle("1.0","red");
console.log(Circle_Output.getRadius());


