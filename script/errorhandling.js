console.log("---------error handling----")
try
{
    console.log("this is error block")
    console.lag("sudo")
}
catch(error)
{
    console.log(error.message,"there is some error in the code.")
}

const add=(a,b)=>
{
    try
    {
        if(isNaN(a,b))
        {
            throw new TypeError("Hey this is not a number please enter number!!!!!!");
        }
        else 
        {
            console.log(a+b);
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
}
add("n",3)