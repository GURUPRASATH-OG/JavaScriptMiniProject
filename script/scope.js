var global="global variable";
let letglobal="flok";
const constglobal="constglobal";
function localscope()
{
    var global=10;//this overrides the global variable 
    var varlocal=9;//this local
    let letlocal=10;
    const constlocal=10;
    console.log(varlocal,global,letlocal,constlocal);
    letglobal=90;//it will override the global value
    console.log(letglobal,constglobal);
}
localscope();
console.log(global,letglobal,constglobal);

