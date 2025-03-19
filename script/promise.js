const sonPromise = new Promise(
    (resolve,reject)=>
{
    const areYouWinningSon=true
    if(areYouWinningSon)
    {
        resolve("Im winning Dad!")
    }
    else
    {
        reject("Im losing Dad!")
    }
}
)
console.log(sonPromise)

const orderCoffee = new Promise(
    (resolve,reject)=>
    {
       const isMachineWorking=true;
       setTimeout(()=>{
        if(isMachineWorking)
        {
            resolve("Give the Customer Cofee")
        }
        else
        {
            reject("Sorry Cofee Machine is not Working!")
        }},3000)
    }
)
console.log("Ordering Cofee!")
orderCoffee.then((msg)=>
{
    console.log(msg)
    return new Promise(
        (resolve,reject)=>
        {
            resolve("Here is the Bill: $10 bucks")
        }
    )
}
).then((bill)=>console.log(bill)).catch((err)=>console.log(err)).finally(()=>console.log("Thank you for visiting."))

const countDown= (duration)=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve()
        },duration)
    })
}
countDown(1500).then(
    ()=>
        {
            console.log(3)
            return countDown(1500)
        })
        .then(
            
            ()=>
                {
                    console.log(2)
                    return countDown(1500)
                }
        )
        .then(
            ()=>
                {
                    console.log(1)
                    return countDown(15000)
                }
        )
        .then(
            ()=>
            {
                console.log("Happy New Year")  
                
            }
        )
        console.log("CountDown Begins")
async function asyncfunc()
{
    const cofee = await orderCoffee 
    console.log("async ",cofee)
}

asyncfunc()