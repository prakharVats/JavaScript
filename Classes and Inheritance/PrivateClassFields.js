// Public fields
// Private fields
// Public methods -- all the normal methdos we are using are public methods
// Private methods

class Account {
    // Public field (instances)
    locale = navigator.language;

    //  Private fields
    #movements = [];
    #pin;

    // PRivate fields
    constructor(owner , currency , pin){
        this.owner = owner;
        this.currency = currency;
        // protected properties
        this.#pin = pin;

        console.log("Thanx for opening an account");
    }

    // public interface 
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
    }

    withdraw(val){
    this.deposit(-1 * val);
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            console.log("Loan approved");
        }
    }
    // Static method
    static helper(){
        console.log("this is the helper function");
    }

    // Private Method
    #approveLoan(val){
        return true;
    }
}

const acc1 = new Account("Prakhar" , "Rs" , 7244856);

acc1.deposit(954687456);
acc1.withdraw(1542);
acc1.requestLoan(100);
// we cannot access this #movement outside the class
// console.log(acc1.#movements)
// console.log(acc1.#pin)
// acc1.#approveLoan(123);
Account.helper();
console.log(acc1.getMovements() , acc1);