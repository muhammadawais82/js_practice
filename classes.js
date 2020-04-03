//es5 class example
function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};

var richardsPlane = new Plane(1);
richardsPlane.startEngines();

var jamesPlane = new Plane(4);
jamesPlane.startEngines();
//////////////////////////////
//es6 class for plane
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }
    startEngines(){
        console.log("Engine Starts......");
        this.enginesActive = true;
    }

}
typeof Plane;
////////////////////////////////////////////
//es6 plane by using static keyword
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }
    static badWeather(planes) {
        for (plane of planes) {
            plane.enginesActive = false;
        }
    }
        startEngines(){
        console.log("Engine Starts .....");
        this.enginesActive = true;
    }
}
Plane.badWeather([plane1,plane2,plane3]);
///////////////////////////////////////////////
//es6 subclass
class Tree {
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

/////////////////////////////
//last example of lesson 2 es6 Building Classes and Subclasses (2-3)


class Vehicle {
    constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn() {
        console.log(this.horn);
    }
}

// your code goes here
class Bicycle extends Vehicle{
    constructor(color, wheels = 2, horn = 'honk honk'){
        super(color);
        this.wheels = wheels;
        this.horn = horn;
    }

}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk


/////////////////////////////////////////////
//ES6 example
class Dessert {
    constructor(calories = 250) {
        this.calories = calories;
    }
}

class IceCream extends Dessert {
    constructor(flavor, calories, toppings = []) {
        super(calories);
        this.flavor = flavor;
        this.toppings = toppings;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}
console.log(IceCream)