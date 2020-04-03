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

///////////////////////////////////////////////////
//object default values
function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor())

///////////////////////////////////////////////////////
//js default function parameter
function buildHouse({floors=[1], color='red',walls=['brick']} = {}){
    return `your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.



