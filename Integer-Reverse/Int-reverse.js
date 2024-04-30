// Solution 1
function reverseInt(num){
    const reverse = num.toString().split("").reverse().join("")
    const result = parseInt(reverse)

return result * Math.sign(num)
//Check Math.sign for more details
}

//Solution 2
// function reverseInt(num){
//     const reverse = num.toString().split("").reverse().join("")
//     const result = parseInt(reverse)
//     if(num<0){
//         return 0 - result
//     }
//     return result
// }

console.log(reverseInt(-201012))