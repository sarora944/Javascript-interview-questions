// Solution 1
// const maxChar =(str)=>{
//     const arr = str.split("")
//     const arrSet = new Set([...arr]); // to reduce the number of common iterations
//     let mostChar = '';
//     let mostCharCount = 0;
    
//     arrSet.forEach(char=>{
//         const newArr = arr.filter(ele=> ele === char);
//         if(newArr.length > mostCharCount){
//             mostCharCount = newArr.length;
//             mostChar = char;
//         }
//     })
//     return mostChar
// }

// Solution 2
const maxChar =(str)=>{
    const obj={};
    const arr = str.split("")
    let mostChar = "";
    let mostCount = 0
    arr.forEach(char=>{
        if(obj[char]){
            obj[char] = obj[char] + 1
        }else{
            obj[char] = 1
        }
    })
    Object.keys(obj).forEach((key)=>{
        if(obj[key]>mostCount){
            mostChar = key;
            mostCount = obj[key]
        }
    })
    console.log("obj", obj)
    return mostChar
}
console.log(maxChar("Hello There!"))