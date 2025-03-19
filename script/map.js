let details = new Map();
details.set("Guru","20");
details.set("sudo","21");
details.set("pacman","33");
console.log(details);
console.log(details.get("sudo"));
details.forEach((n,v)=>console.log(v,":",n));

let fact=1;
function factorial(n)
{
    if(n<=0)
        return 1;
    else
        return n*factorial(n-1);
}
console.log(factorial(5));

let arraymap=new Map([
    ["name","sudo"],
    ["age",20],
    ["tech","java"],
    ['alive',true]]);
console.log(arraymap);
for(let i of arraymap.entries())
{
    console.log(i[0]);
}
console.log(arraymap.keys());
console.log(arraymap.values());
console.log(arraymap.entries());
console.log(arraymap.has("name"));
