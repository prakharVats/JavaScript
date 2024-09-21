class Account {
    constructor(owner , currency , pin , movements){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log("Thanx for opening an account");
    }

    // public interface 
    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
    this.deposit(-1 * val);
    }

    approveLoan(){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            console.log("Loan approved");
        }
    }
}

const acc1 = new Account("Prakhar" , "Rs" , 7244856);

acc1.deposit(954687456);
acc1.withdraw(1542);
acc1.requestLoan(100);
console.log(acc1);
