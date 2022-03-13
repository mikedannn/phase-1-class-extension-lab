class Polygon {
    constructor(side) {
        this.side = side;
    }

    get countSides() {
        return this.side.length;
    }

    get perimeter() {
        const sum = this.side.reduce((total, length) => total + length);
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        const newSide = this.side.sort();
        if (newSide[0] + newSide[1] <= newSide[2]) {
            return false;
        } else { 
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.perimeter / 4 === this.side[0]) {
            return true;
        } else {
            return false;
        }

    }

    get area() {
        return this.side[0] * this.side[1];
    }
}