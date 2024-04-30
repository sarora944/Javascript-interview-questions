// Solution 1
// const capitalise = (str)=>{
//     const arr = str.split(" ")
//     let output = [];
//     for (let word of arr) {
//         const charArr = word.split("")
//         charArr[0] = charArr[0].toUpperCase();
//         output.push(charArr.join(""))
//     }
//     return output.join(" ")
// }

//Solution 2
const capitalise = (str)=>{
    const arr = str.split(" ")
    let output = [];
    for (let word of arr) {
        const upperWord = (word[0]).toUpperCase() + word.slice(1)
        output.push(upperWord)
    }
    return output.join(" ")
}

//Solution 3
// const capitalise = (str)=>{
//     let output = '';
//     str.split("").forEach((char, index)=>{
//         if(str[index-1]===" " || index===0){
//             output += char.toUpperCase()
//         }else{
//             output+=char
//         }
//     })
//     return output
// }
console.log(capitalise("hi there, how are you doing?"))
