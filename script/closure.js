 const outer=()=>
{
    const local="nan oru local variable";
    const inner=(invar)=>local+invar;
    return inner;
}
const callouter=outer();
console.log(callouter(",nan inner function parameter"));

const scores =(basepoint)=>
{
    console.log("score function runn")
    const totalpoints =basepoint;
    const addPoint=(addpoint)=> totalpoints+addpoint; 
    const removePoint=(rmpoint)=>totalpoints-rmpoint;
    const getTotal=()=> totalpoints;

    return ({addPoint,removePoint,getTotal});
}
const scorefunctions = scores(100);
console.log(scorefunctions.addPoint(1));
console.log(scorefunctions.removePoint(29));
console.log(scorefunctions.getTotal());