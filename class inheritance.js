
const Car = function(car , speed){
    this.car = car;
    this.speed = speed;
}



Car.prototype.accelerate = function(){
this.speed += 20;
this.charge -= 1;
console.log(`Your ${this.car} is running at ${this.speed}, with a charge of ${this.charge}%`)
}
Car.prototype.break = function(){
    this.speed -= 10;
    this.charge -=2;
    console.log(`Your ${this.car} is running at ${this.speed}, with a charge of ${this.charge}%`)

}


//  EV CAR
const EV = function(car , speed , charge){
    Car.call(this , car , speed , charge);
    this.charge = charge;
}
// linking EV with Car
EV.prototype = Object.create(Car.prototype);

// defining the prototypes
EV.prototype.chargeBattery = function(changeTo){
    this.charge = changeTo;
    console.log(`charged to : ${this.charge}%`);
}

const BMW = new EV("BMW" , 150 , "24");
BMW.accelerate();
BMW.accelerate();
BMW.break();
BMW.chargeBattery(50);
BMW.accelerate();
BMW.break();

