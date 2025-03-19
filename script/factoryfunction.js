function createCar(name,model,price)
{
    return{
        name,
        model,
        price,
        details()
        {
            console.log(`Hi im car my name is${name}, my model is ${model}, and my price is${price}`)
        }
    }
}
let nano = createCar("nano","mini-car",100000);
nano.details();
console.log(nano.name);

