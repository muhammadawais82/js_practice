// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
    setTimeout(() => { // an arrow function is passed to setTimeout
        this.scoops++;
        console.log('scoop added!');
    }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();