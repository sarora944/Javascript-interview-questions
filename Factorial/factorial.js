// factorial of a number 
// ex - factorial of 4 is 4*3*2*1


function factorialFn(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * factorialFn(num - 1)
    }
}

console.log(factorialFn(0))
