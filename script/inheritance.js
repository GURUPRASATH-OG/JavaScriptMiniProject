class Learner
{
    constructor(name,age)
    {
        this.name=name;
        this._age=age;
        
    }
    bio()
    {
        return`Hi im ${this.name}, age ${this.age}`
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
class SchoolStudent extends Learner
{
   constructor(name,age,std)
   {
    super(name,age)
    this.std=std
   }
   bio()
   {
    return `${super.bio()} and Im a school student.`
   }
   aboutMyself()
   {
    return `Hi Im ${this.name}, studing ${this.std} std and my  age is ${this.age}.`
   }
   toString()
   {
    return `SchoolStudent { name: ${this.name}, _age: ${this.age}, std: ${this.std}}`
   }
}
const student1 = new SchoolStudent("sudo",15,12)
console.log(student1)

class CollegeStudent extends Learner
{
   constructor(name,age,year)
   {
    super(name,age)
    this.year=year
   }
   bio()
   {
    return `${super.bio()}, Im a college Student studying ${this.year}rd year`
   }
   
   toString()
   {
    return `SchoolStudent { name: ${this.name}, _age: ${this.age}, std: ${this.year}}`
   }
   aboutMyself()
   {
    return `Hi Im ${this.name}, my age is ${this.age}and Im studying ${this.year} in college`
   }
}
const collegestudent = new CollegeStudent("sudo",19,3);
console.log(collegestudent)
console.log(collegestudent.bio())
console.log(student1.bio())