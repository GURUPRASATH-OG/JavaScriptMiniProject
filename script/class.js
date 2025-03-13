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
    constructor(name,age,year)
    {
        this.name=name;
        this._age=age;
        this._year=year;
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