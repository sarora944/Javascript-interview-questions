// Solution 1
// const palindromesFn = (str)=>{
//     const reversed = str.split("").reverse().join("")
//     return str === reversed
// }

// Solution 2
// const palindromesFn = (str)=>{
//     const arr = str.split("")
//     let isPalindrom = false
//     for(let i=0; i< (str.length)/2; i++ ){
//         const lastIndex = str.length - i -1
//         if(str[i] === str[lastIndex]){
//             isPalindrom = true
//         }else{
//             isPalindrom = false;
//             break
//         }
//     }
//     return isPalindrom;
// }

//Solution 3
const palindromesFn = (str)=>{
    return str.split("").every((char, index)=>{
        return char === str[str.length -1-index]
    })
}
const isPalindrom = palindromesFn("arora");
console.log("isPalindrom", isPalindrom)