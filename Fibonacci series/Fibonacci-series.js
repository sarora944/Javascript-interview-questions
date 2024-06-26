// Solution 1
// const fibonacci = (num)=>{
//     const arr = [0];
//     for (let i = 0; i < num-1; i++) {
//         if(arr.length<2){
//             arr.push(i+1)
//         }else{
//             const newNum = arr[arr.length-1] + arr[arr.length-2]
//             arr.push(newNum)
//         }
//     }
//     return arr
// }

// Solution 2
// const fibonacci = (num)=>{
//     let num1 = 0, num2 = 1, nextNum;
//     for(let i=0; i<num;i++){
//         console.log(num1)
//         nextNum = num1+num2;
//         num1 = num2;
//         num2 = nextNum
//     }
// }

// Solution 3
let arr = [0,1]
const fibonacci = (num, initialNum = 0)=>{
    if(initialNum<num){
        const a = arr[arr.length-1];
        const b = arr[arr.length-2];
        arr.push(a+b)
        initialNum++
        return fib(num, initialNum);
    }
    console.log(arr)
}
const series = fibonacci(12);

console.log(series)