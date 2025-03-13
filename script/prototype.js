const myproto=
{
    name:"sudo",
    age:20,
    sayHi()
    {
        return  `Hello Im ${this.name} ${this.age}.`
    }

}
const puthiyamanitha= Object.create(myproto);
console.log(puthiyamanitha.__proto__===Object.getPrototypeOf(puthiyamanitha))
console.log(puthiyamanitha.toString())