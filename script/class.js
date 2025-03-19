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

const Studentexp = class Studentexp
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

const Studentanon = class {
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
const pacman = new Student("pacman",20,12);
console.log(pacman.greet())
const kudo = new Student("kudo",20,12);
console.log(kudo.greet())


class gettersetter
{
   id="#03f83e8dhu3"
    constructor(name,age,profession)
    {
        this.name=name;
        this._age=age;
        this.profession=profession;
    }
    about()
    {
        return`Hi im ${this.name}, age ${this.age} working as ${this.profession}.`
    }
    get id()
    {
        return this.id;
    }
    get fullname()
    {
        return this.name.toUpperCase();
    }
    set fullname(name)
    {
        this.name=name;
    }
    get age()
    {
        return this._age;
    }
    set age(age)
    {
        this._age=age;
    }
}
const getter = new gettersetter("sudo",20,"software Developer")
console.log(getter)
console.log(getter.fullname)
getter.fullname="pacman"
console.log(getter.fullname)
getter.age=99
console.log(getter.age)
console.log(getter.id)

class WorkingProfessional
{
    constructor(name,age,profession)
    {
        this.name=name;
        this._age=age;
        this.profession=profession;
    }
    about()
    {
        return`Hi im ${this.name}, age ${this.age} Studying ${this.profession}.`
    }
    get id()
    {
        return this.id;
    }
    get fullname()
    {
        return this.name.toUpperCase();
    }
    set fullname(name)
    {
        this.name=name;
    }
    get age()
    {
        return this._age;
    }
    set age(age)
    {
        this._age=age;
    }
}

class CollegeStudent
{
    static TotalStudents=0
    constructor(name,age,year)
    {
        
        this.name=name;
        this._age=age;
        this._year=year;
        this.constructor.TotalStudents++;
        this.constructor.attendance.push(name,age,year)
    }
    static attendance = []
    static University ="Madras";
    static  getTotalStudents()
    {
        return this.TotalStudents;
    }
    static getAttendance()
    {
        return this.attendance;
    }
    about()
    {
        return`Hi im ${this.name}, age ${this.age} Studying ${this.year} in college.`
    }
    get id()
    {
        return this.id;
    }
    get fullname()
    {
        return this.name.toUpperCase();
    }
    set fullname(name)
    {
        this.name=name;
    }
    get age()
    {
        return this._age;
    }
    set age(age)
    {
        this._age=age;
    }
    get std()
    {
        return this._std;
    }
    set std(std)
    {
        this.std=std;
    }
}
class Flipkart
{
    static cart =[];
    static totalItems=0;
    static totalCost=0;
    constructor(product,qty,price)
    {
        this.product=product;
        this.price=price;
        this.qty=qty;
        this.constructor.totalItems++;
        this.constructor.cart.push(product,qty,price)
        this.constructor.totalCost+=price*qty;
    }
    static showCart()
    {
        return this.cart;
    }
    static getTotalItemss()
    {
        return this.totalItems;
    }
    static getTotalCost()
    {
        return this.totalCost;
    }
}

const student1=new CollegeStudent("sudo",20,3);
const student2=new CollegeStudent("sudo",20,3);
const student3=new CollegeStudent("sudo",20,3);
console.log(CollegeStudent.getTotalStudents())
console.log(CollegeStudent.getAttendance());
const item1 = new Flipkart("biscuits",4,100);
const item2 = new Flipkart("Fruits",3,150);
const item3 = new Flipkart("Almonds",1,200);
const item4 = new Flipkart("Snacks",5,50);
console.log(Flipkart.getTotalItemss());
console.log(Flipkart.showCart());
console.log(Flipkart.getTotalCost());