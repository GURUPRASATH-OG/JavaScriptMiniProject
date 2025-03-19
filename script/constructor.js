let user=
{
    name:"",
    age:0,
    tech:""
}
function construct(name,age,tech)
{
    this.name=name,
    this.age=age,
    this.tech=tech
    this.compare=function(otheruser)
    {
        if(this.age>otheruser.age)
            console.log(this);
        else
            console.log(otheruser);
    }
}
let user1= new construct("super user",99,"Unix");
let user2 = new construct("not a super user",20,"Java");
console.log("normal comparison using if else")
if(user1.age>user2.age)
    console.log(user1);
else
    console.log(user2);
console.log("----------------------------------------------");
console.log("comparing using the compare method")
user1.compare(user2);

