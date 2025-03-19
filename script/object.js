let cars={
    name:"polo gt",
    maker:"wolswagen",
    variant:"disel",
    sets:4,
    category:"sports",
    getdetails:()=>{console.log(cars.name,cars.category,cars.maker)}
}
console.log(cars);
cars.getdetails();

let newcar=
{
    speed()
    { 
        return "speed Up";
    }
}
const modifiedcar=Object.assign(cars,newcar);
console.log(cars);
console.log(newcar);
console.log(modifiedcar);
console.log("object merging usin spread operator syn: ...obj1,...obj2");
const spreadcar={...cars,...newcar};
console.log(spreadcar);