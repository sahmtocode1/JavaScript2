class House {
    constructor(location, size){
        this.location = location;
        this.size = size;
    }
    contract(){
        console.log(`The ${this.location} house, that is ${this.size} went under contract`);
    }
}

class Farm extends House {
    constructor(location, size){
        super(location, size);
    }
}

let house1 = new House ("Country", "2500sqft.")
let house2 = new House ("City", "1500sqft.")
 console.log(house1.location);
 house1.contract();
 house2.contract();


 