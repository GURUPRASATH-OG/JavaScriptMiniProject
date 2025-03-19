let names=new Set();
console.log(names);
names.add("Oracle");
names.add("apple")
names.add("sudo");
names.add(function(){return"nigaa"},{Name:"sudo",age:20});
console.log(names.has("Oracle"));
names.entries
names.forEach((names)=>console.log(names));
function printset()
{
    names.forEach((name)=>document.getElementById("res").innerHTML+='<li>'+name+'</li>')
}
function printkeys()
{
    names.forEach((name)=>document.getElementById("res").innerHTML='<li>'+name+'</li>');
}
// console.log(window.innerHeight,window.innerWidth)
// window.open("https://google.com")

async function  authorbutt()
{
    const response = await fetch('http://localhost:8082/api/books')
    const authorarr = await response.json()
    console.log(authorarr);
    console.log(Array.isArray(authorarr))
    authorarr.forEach((obj)=>document.getElementById('res').innerHTML='<li>'+JSON.stringify(obj)+'</li>')
    //document.getElementById("res").innerHTML=JSON.stringify(authorarr,null,2)
}
const givedata=(url)=>{
fetch(`${url}`).then((msg)=>msg.json()).then((data)=>console.log(data))
}
//console.log("40",asyncs('http://localhost:8082/api/books'))
authorbutt('http://localhost:8082/api/books')
//location.href=("https://google.com")
//history.back()
//history.forward()
let name=prompt("what is your name")
let age = prompt("enter your age")
document.body.innerHTML=`<h1>Hi ${name} you age is ${age}</h1>`