class Student
{
    constructor(name,age,std)
    {
        this.name=name;
        this.age=age;
        this.std=std;
    }
    greet()
    {
        return `Hi Im ${this.name}, studying ${this.std} Std and my age is ${this.age}.`
    }

}
const sudo = new Student("sudo",20,12);
console.log(sudo.greet())