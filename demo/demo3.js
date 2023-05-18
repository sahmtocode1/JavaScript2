//const colors = ["green", "blue", "red"];

//const bicycle = {
    //color: "blue",
    //size: "small",
    //ride(){
        //console.log("you began to pedal.");
    //},
//};
//console.log(bicycle.size);
//bicycle.ride();

//bicycle.color="red";
//console.log(bicycle.color);

//Classes are non destructive ways to handle objects

class Dog {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    bark() {
        console.log(`The ${this.color} dog, named ${this.name} began to bark`);
    }
}

class Shepherd extends Dog{
    constructor(name, color){
        super(name, color);
    }
    run(){
        console.log(`The Shepherd ran!`);
    }
}

let dog1 = new Dog ("Nahla", "Brown");
let dog2 = new Dog ("Meka", "Light Brown");
let shep1 = new Shepherd ("Sarge", "White and Black");
console.log(shep1.name);
dog1.bark();
dog2.bark();

//console.log(colors[0]);

//arrays 0 based index

//propery has key and value

//objects have modules

//class constructor method

//class inheritance extend and super keywords