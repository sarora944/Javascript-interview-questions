Array.prototype.filterFn = function (callback) {
    const newArr = [];

    for(let i=0; i< this.length; i++){
        if(callback(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr
}

const result1 = [1,2,3,4,5,6,7,10].filter((item)=> item>5 && item <=7)
const result2 = [1,2,3,4,5,6,7,10].filterFn((item)=>item>5 && item <=7)
console.log(result1)
console.log(result2)