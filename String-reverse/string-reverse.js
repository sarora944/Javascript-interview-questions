// Solution 1
// const stringReverse =(str)=>{
//     return str.split("").reverse().join("")
// }

// Solution 2
const stringReverse =(str)=>{
    let newStr=''
    // for(let i=(str.length)-1; i>=0; i--){
    //     newStr += str[i]
    // }
    for(let char of str){
        newStr = char + newStr;
    }
    return newStr
}
const newStr = stringReverse("Shubham")
console.log(newStr)