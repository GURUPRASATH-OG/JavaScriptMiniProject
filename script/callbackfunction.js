const greetuser=(name)=>
{
    console.log("Hello, "+name);
    setTimeout(()=>console.log("bye",name),5000)
}
//greetuser("sudo");
const orderpizza =(callback)=>
{
    console.log("pizza is being prepared")
    setTimeout(() => {
        const pizza ="cheese burst pizza"
        callback(pizza);
    }, 3000);
}
const pizzaready=(pizza)=>
{
    console.log(`Eat your Godamm ${pizza}`)
}
orderpizza(pizzaready);
console.log("im fixing bugs till my pizza arrives")
console.log("hi")


const callpizza=(makepizza,deliverpizza,pizzaname)=>
{
    setTimeout(()=>
    {
        console.log("Your order is taken")
        makepizza(deliverpizza,pizzaname)
    },3000)
}

const makepizza=(deliverpizza,whichpizza)=>
{
    setTimeout(
        ()=>
        {
            console.log(whichpizza)
            const thispizza = whichpizza;
            deliverpizza(thispizza);
        },4000
    )
}
const deliverpizza=(pizza)=>
{
    console.log(`He is your ${pizza}`)
}
callpizza(
    ()=>
{
    makepizza(()=>
    {
        deliverpizza();
    })
},"Mushroom Pizza")
