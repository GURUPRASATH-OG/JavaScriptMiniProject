console.log("hello world");
function add(a,b)
{
    console.log(a+b);
}
add(8,3);
let num1=10;
num1=1;
var num2=23;
num2=33;
const num3 =3;
console.log(x===undefined);
var x=10
globalThis.a=10;
console.log(a);
console.log(Boolean(0)); //false a falsy value.
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(parseInt("123sudo")+23);
for(i=0;i<=10;i++)
{
    console.log("2 x "+i+"="+2*i)
}
console.log("sudo".length)
console.log("10">=10);
console.log(x%2===0?"even":"odd");

let day="Monday";
switch(day)
{
    case "Monday":
        console.log("monday");
        break
    case "Tueday":
        console.log("monday");
        break
    case "Wednesday":
        console.log("wednesday");
        break
    case "Thursday":
        console.log("Thrusday");
    case "Friday":
        console.log("Friday");
    case "Saturday":
        console.log("Saturday")
        break
    case "Sunday":
        console.log("Sunday");    
}
console.log("Template literal or printf");
console.log(`the sum of ${x} and ${x} is ${x}+${x}`);
console.log(`template 
    literal 
    is 
    very 
    good`)
do
{
    console.log("hi")
}while(false)
let ognum = 564782;
let revnum=0;
while(ognum>0)
{
    revnum+=(ognum%10)*10;
    revnum=revnum*10;
    ognum= parseInt(ognum/10);
    console.log(revnum);
}
console.log(revnum);

const distros=["mint","steamos","arch"];
for(i in distros)
{
    console.log(distros[i]);
}
distros[3]="kali";
console.log(distros);
let car={name:"BMW",model:"M4",variant:"disel",engine:"v12 turbo"}
console.log(car);
for(c in car)
{
    console.log(car[c]);
}
let employee =
{
    name:"sudo",
    empid:"1079283",
    laptop:
    {   name:"hp-probook",
        model:"office laptop",
        ram:"16gb",
        storage:"512gb"
    }
}
for(emp in employee)
{
    console.log(employee[emp])
    if(emp==="laptop")
        for(specs in employee.laptop)
            console.log(employee.laptop[specs])
}

function  greet()
{
    return "hello world";
}
console.log(greet());

let nums =[1,2,3,4,5];
console.log(a,b,c,d);