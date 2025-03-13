let myobject = {
    name:"sudo",
    age:20,
    hobbies:['playing','youtube','ricing'],
    alive:true
}
let {name,age}=myobject;//object destructuring
console.log(name,age);
object_destructuring(myobject);
without_object_destructing(myobject); 
function object_destructuring({name,age,hobbies})
{
    console.log(`Hi my name is ${name} and my age is ${age}, my hobbies ${hobbies}.`);
}
function without_object_destructing(object)
{
    console.log(`My name is ${object.name}, my age is ${object.age} and my hobbies are ${object.hobbies}`);
}
let a =[1,2,3]
let b =a;
b.push(5);
console.log(a);
console.log(b);

