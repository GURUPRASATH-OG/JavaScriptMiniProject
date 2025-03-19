const pro1 = ()=>
{
    return new Promise((resolve,reject)=>
        {
        setTimeout(()=>
        {
             resolve("Hi im first promise")
        },1000)})
}
const pro2 = ()=>
{
    return new Promise((resolve,reject)=>
    {
    setTimeout(()=>
    {
         reject("Hi im second promise")
    },500)
})
}
// m
Promise.all([pro1(),pro2()]).then((msg)=>console.log("Im Promise.all()",msg)).catch((err)=>console.log("Hi Im Promise.all() error",err))
Promise.allSettled([pro1(),pro2()]).then((msg)=>console.log("Im Promise.allSettled()",msg)).catch((err)=>console.log("Im Promise.allSettled",err))
Promise.race([pro1(),pro2()]).then((msg)=>console.log("Im Promise.race()",msg)).catch((err)=>console.log("Im Promise.race() error",err))
Promise.any([pro1(),pro2()]).then((msg)=>console.log("Im Promise.any()",msg)).catch((err)=>console.log("Im Promise.any() error",err))
