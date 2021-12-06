function parseCount(value) {
    let result;
    result = Number.parseInt(value);
    console.log(result);
    if(isNaN(result)) {
        throw new TypeError("Невалидное значение"); 
    } else {
    return result;
    }
}

function validateCount(item) {
    let result;
    try {
        result = parseCount(item);
        return result;
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b ,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(((a + b) < c) || ((a + c) < b) || ((b + c) < a)){
            throw new TypeError("Треугольник с такими сторонами не существует");
        }
    }
    
}

Triangle.prototype.getPerimeter = function getPerimeter() {
    let perimeter;
    perimeter = this.a + this.b + this.c;
    return perimeter;
}

Triangle.prototype.getArea = function getArea() {
    let area;
    let p;
    p = 0.5 * (this.a + this.b + this.c);
    area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
}

function getTriangle(a, b, c) {
    let triangle;
    try {
        triangle = new Triangle(a, b ,c);
        return triangle;
    } catch (error) {
        triangle = {
            getArea: function() {return "Ошибка! Треугольник не существует"},
            getPerimeter: function() {return "Ошибка! Треугольник не существует"},
        }
        return triangle;
    }
}