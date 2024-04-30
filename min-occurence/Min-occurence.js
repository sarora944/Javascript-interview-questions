// find number of occurence of the minimum value

const arr2 = [3,5,3,4,6,2,4,6,3,2,2,6,8,9,2]
const minVal = Math.min(...arr2)
const occuerence = arr2.filter((el)=>el === minVal).length
console.log("minVal", minVal)
console.log("occuerence", occuerence)