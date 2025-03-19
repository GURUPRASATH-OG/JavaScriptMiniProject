const themeSwitch =()=>
{
    const body = document.body
    const heading =document.getElementById('content-head');
    heading.innerHTML=`<h1>HA HA HA </h1>`
    console.log(body,heading)
    
}
const saveData =()=>
{
    const button = document.getElementById('inbtn');
    const data = document.getElementById('data')
    const foodcontainer = document.getElementById('food-list');
    button.addEventListener('click',()=>{
    foodcontainer.innerHTML+=`<li class='food-item'>${data.value}</li>`;
    const fooditemlist=document.getElementsByClassName('food-list')
    document.body.innerHTML+=[].map.call(fooditemlist,(food)=>food.textContent)
    console.log(fooditemlist)
    })
}

