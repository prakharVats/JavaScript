console.log("hello world");

class PersonCl{
    constructor(Name , birthYear){
        this.birthYear = birthYear;
        this.Name = Name;
    }

    // prototype
    calcAge(){
        console.log(2040 - this.birthYear);
    }

    // getters and setters
    get Greet (){
        console.log(`hello there , this is ${this.Name}`);
    }

    set Bye (newName){
        console.log(`bye bye` , newName);
    }
}


// creating new student class that will inherit the prototypes of PersonCl
// extends ---- links the prototype of student with PersonCl

class Student extends PersonCl {
    constructor(Name , birthYear , course){
        super(Name , birthYear , course); // creates this keyword for this class
        this.course = course;
    }

    calcAge(){
        console.log("I am" , 2050-this.birthYear , "in 2050");
    }
}

const martha = new Student("Martha jones" , 2002 , "Computer Science");
martha.Greet;
martha.calcAge();
