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
const closureobj= function ()
{
let balance=0;
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
const closureref = closureobj();
console.log(closureref.getBalance());
(function(){
    console.log("immediate invoked function");
})();


const me = {
    talk()
    {
        return "talking";
    }
}