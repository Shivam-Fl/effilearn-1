
function oldAdd(a,b){
    return a+b; 
}

let add = (a,b) => a+b;

let addMultiply = (a,b) => {
    let sum = a+b;
    let multiply = a*b;
    return [sum, multiply];
}

console.log(addMultiply(2,3));