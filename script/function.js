function add(a,b)
{
    console.log("this function will add 2 number and return");
    return a+b;
}
function greet()
{
    console.log("Hi,");
}

function sudo(user)
{
    if(user==="sudo")
        return "sudo";
    else
        return "not a sudo";
}
let res=sudo("sudo");
console.log(res);

function outsidefunction(funcargs,arrayargs)
{
    const cubedarr = new Array(arrayargs.length);
    for(let i=0; i<arrayargs.length; i++)
    {
        cubedarr[i]=funcargs(arrayargs[i]);
    }
    return cubedarr;
}
let numbers =[1,2,3,4,5]
function cubefunction(n)
{
    return n*n*n;
}
let function_as_arg_result= outsidefunction(cubefunction,numbers);
console.log(function_as_arg_result);

function factorial(n)
{
    if(n<=0)
    {
        return 1;
    }
    else
    {
        return n*factorial(n-1);
    }
}
console.log(factorial(5));
function fact(n)
{
   if(n>0)
    {
        return n*fact(n-1);
    }
    else
    {
        return 1;
    }
}
console.log(fact(5));
const closureobj= function (minimumbalance)
{
let balance=minimumbalance;
function deposit(amount)
{
    balance +=amount;
    console.log(`Your balance after deposit: ${balance}`);
};
function debit(amount)
{
    balance-=amount;
    console.log(`Your balance after debit: ${balance}`);
};
function getBalance()
{
    return balance;
};
return {deposit,debit,getBalance};
}
const closureref = closureobj(1000);
console.log(closureref.getBalance());
closureref.debit(500);
(function(){
    console.log("immediate invoked function");
})();


const me = {
    talk()
    {
        return "talking";
    }
}
function getBalance()
{
    return 100;
}
console.log(getBalance())


console.log("function prototype apply(),call(),bind()")

const adds = (a,b)=>
{
    return a+b
}
console.log(adds(1,2));
console.log("using function.apply(this,arg[])=>",add.apply(null,[1,2]));
console.log("Using the function.call(args)=>",add.call(null,2,3))
const bindres = add.bind(null,[1,2]);
console.log("using method.bind() store it to var and call that var->",bindres())
const age=19;
console.log(age>18 ?"eligble":"not eligbile")

const getStatusMessage=(age,members)=>age>18 && members?age>20 ? "Welcome, adult member!":"Welcome, adult guest!":"Access denied. Minors are not allowed"
const user1={age:0,isMember:true}
console.log(getStatusMessage(user1.age,user1.isMember))