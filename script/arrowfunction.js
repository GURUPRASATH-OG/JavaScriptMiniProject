//arrow function is fat arrow function it provide concise way to write functions in javascript.
const simplearrow=()=>{console.log("simple arrow IIFE function.")};
const paraarrowfn=n=>console.log("parametrized arrow function"+n);
const sqarearrowfn=n=>{console.log(n*n)};
sqarearrowfn(9);
paraarrowfn(9);

const arrowobj =
{
    name:"arrow function",
    age:10,
    work:()=>{
        return arrowobj.name+ arrowobj.age;
    }
}
console.log(arrowobj.work())
const arrowreturnobj=()=>{
   return { 
    id:1,
    name:"sudo",
    age:20
   }
}
console.log(arrowreturnobj());
const arwrtnobj=()=>({id:1,name:"arrow"});//one line arrow funtion returning aobject we have enclose the object inside ({obj})
console.log(arwrtnobj());

console.log("good function")
const goodfunction=(a,b) =>a+b;
for(let i=0; i<10; i++)
{
    console.log(goodfunction(2,2));
}

const task=new Map([[1,"wake up"],[2,"brush"],[3,"bath"]]);
console.log("before: ",task);
const badfunction=(key,value)=>task.set(key,value);
console.log(badfunction(4,"eat"))
console.log("after",task)
console.log("its bad function because modifies the state of the task array which defined globbaly")
