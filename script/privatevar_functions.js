class PrivateMembers
{
    #pin
    constructor(name,age,accno,pin)
    {
        this.name=name;
        this.age=age;
        this.accno=age;
        this.#pin=pin;
    }
    #debit="1234 5678 9192"
    passbook()
    {
        
       return  `
                Account Holder: ${this.name},
                Account Number: ${this.accno},
                Account Holage: ${this.age},
               ${this.#credentials()}`
               /*Account Holder: sudo,
                Account Number: 20,
                Account Holage: 20,
                Private AccPin: 1293,
                Private Debit : 1234 5678 9192.*/
    }
    #credentials()
    {
        return` Private AccPin: ${this.#pin},
                Private Debit : ${this.#debit}. `
        
    }
}
const acc1= new PrivateMembers("sudo",20,874838,1293);
console.log(acc1.passbook())
// console.log(acc1.#credentials)