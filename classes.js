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