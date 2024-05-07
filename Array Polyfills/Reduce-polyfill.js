Array.prototype.reduceFn = function (callback, initialVal) {
    let output = initialVal;
    for(let i=0; i< this.length; i++){
        output = callback(output, this[i])
    }
    return output
}

const result1 = [1,2,3,4].reduce((total, val)=> total+val, 1)
const result2 = [1,2,3,4].reduceFn((total, val)=> total+val, 1)
console.log(result1)
console.log(result2)