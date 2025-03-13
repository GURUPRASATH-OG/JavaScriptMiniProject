let arr=["a",1,true,function(){console.log("anonmyous function")}];
arr[3]();
let numbers = new Array();
numbers[0]=1;
numbers[99]="last";
console.log(numbers);
for(n of numbers)
{
    console.log(n);
}
numbers.push(9);
console.log(numbers);
numbers.pop();
console.log(numbers);

console.log("array destructre");
let numbarr=[1,2,3,4,5,6];
let [a,b,c,d,e,f,g]=numbarr;
console.log(a,b,c,d,e,f);
[a,b]=[b,a];
console.log(a,b);
numbarr.forEach((n)=>
    {

    console.log(n*30)
})
console.log(numbarr.filter(n=>(n%2===0)).forEach(x=>console.log(x*10)))
numbarr.map(n=>n*n).filter(n=>n%2===0).forEach(n=>console.log(n));
console.log(numbarr.map(n=>n*20).reduce((a,b)=>a+b));

let array2d=[[1,2,3],[4,5,6],[7,8,9]];
console.log(array2d);

//html content
document.getElementById("res").innerHTML="hi im javascript";

arr.forEach((n)=>
    document.getElementById('res').innerHTML += n +'<br>'
)

function printvalues()
{
    return arr.forEach((n)=>
        document.getElementById('res').innerHTML +='<li>'+ n +'</li>'+'<br>'
    )
}
function forinprint()
{
    for(let i in arr)
    {
        document.getElementById("res").innerHTML+='<li>'+arr[i]+'</li>';
    }
}
const subcallback=()=>
{
    setTimeout(()=>{return alert("Subsribe")},3000)
}