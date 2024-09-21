console.log("create object");

const PersonProto = {
    calcAge(){
        console.log(2040 - this.birthYear);
    },
    init(firstName , birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName , birthYear , course){
    PersonProto.init.call(this , firstName , birthYear);
    this.course = course;

}

StudentProto.introduce = function(){
console.log("hello this is : " , this.firstName);
}

const nick = Object.create(StudentProto);
nick.init("Nick Jr" , 2002 , "CSE")
nick.introduce();
nick.calcAge();