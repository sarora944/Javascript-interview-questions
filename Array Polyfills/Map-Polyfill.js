Array.prototype.mapFn = function(callback){
    const newArr = []
    if(typeof callback !== 'function'){
        throw Error("Input value should be a function")
    }
    for(let i=0; i< this.length; i++){
        newArr.push(callback(this[i]))
    }
    return newArr
}

const result1 = [1,2,3,4].mapFn((item)=>item * 2)
const result2 = [1,2,3,4].mapFn((item)=>item + 10)
console.log('result1', result1)
console.log('result2', result2)
