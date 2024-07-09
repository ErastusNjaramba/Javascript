let globalVar = "I am a Global Viriable";
function demoScope(){
    let localVar ="I am a local variable";

    console.log(globalVar);
    console.log(localVar);
    
}

// console.log(globalVar);
console.log(localVar);
return demoScope();
