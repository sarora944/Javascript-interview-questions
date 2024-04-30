// Anagram is  a word or phrase that is made by arranging the letters of another word or phrase in a different order

// Solution 1
// const strToObj = (str)=>{
//     //this function will create an object of the character of string
//     const word = str.replace(/[^\w]/g, "").toLowerCase() // removing all the spaces and special characters
//     let obj = {}
//     for (let char of word) {
//         if (!obj[char]) {
//             obj[char] = 1;
//         } else {
//             obj[char]++
//         }
//     }
//     return obj
// }

// const anagramFn = (str1,str2)=>{
//     let obj1 = strToObj(str1)
//     let obj2 = strToObj(str2)
//     let isSame = false

//     if(Object.keys(obj1).length !== Object.keys(obj2).length){
//         return false
//     }
//     for (let key in obj2) {
//         if (obj2[key] === obj1[key]) {
//             isSame = true
//         } else {
//             isSame = false;
//             break;
//         }
//     }
//     return isSame
// }

// Solution 2
const sortStr = (str)=>{
    const word = str.replace(/[^\w]/g,'').toLowerCase()
    return word.split("").sort()
}
const anagramFn = (str1, str2)=>{
    const sortArr1 = sortStr(str1)
    const sortArr2 = sortStr(str2)
    return(JSON.stringify(sortArr1) === JSON.stringify(sortArr2))
}
console.log(anagramFn("rail safety", "fairy tales")) // true
console.log(anagramFn("RAIL safety", "fairy tales")) // true
console.log(anagramFn("hi there", "bye there"))// false
console.log(anagramFn("abcd", "bcde")) // false
