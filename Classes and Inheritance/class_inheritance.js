
const Car = function(car , speed){
    this.car = car;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
this.speed += 10;

console.log(`Your ${this.car} is running at ${this.speed}`)
}
Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`Your ${this.car} is running at ${this.speed}`)
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
//  this accelerate method will overwrite the accelerate method of the Car class -- same goes for the break method
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`Your ${this.car} is running at ${this.speed}, with a charge of ${this.charge}%`)
    }

EV.prototype.break = function(){
        this.speed -= 10;
        console.log(`Your ${this.car} is running at ${this.speed}, with a charge of ${this.charge}%`)
    }

    
const BMW = new EV("BMW" , 150 , "24");
BMW.accelerate();
BMW.accelerate();
BMW.break();
BMW.chargeBattery(50);
BMW.accelerate();
BMW.break();

