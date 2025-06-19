function multiply(a,b){
    return a * b
}

function multiplyNumber(num1 , num2 ){
    return multiply.apply(null , [num1 , num2])
}

console.log(multiplyNumber(50 , 50))