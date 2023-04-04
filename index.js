// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((sum, side)=>sum+side,0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.sides[2]>this.sides[1]+this.sides[0])return false
        if (this.sides[1]>this.sides[2]+this.sides[0])return false
        if (this.sides[0]>this.sides[1]+this.sides[2])return false
        return true
    }
}

class Square extends Polygon{
    get isValid(){
        return this.sides[0]===this.sides[1]&&this.sides[0]===this.sides[2]&&this.sides[0]===this.sides[3]
    }
    get area(){
        return this.sides[0]*this.sides[0]
    }
}