// shuffle numbers
const arr = [43,4,433,2,1,63,34]
const appraoch1 = [];
let appraoch2 = [];

//approach 1
arr.forEach((num)=>{
const randomIndex = Math.random()*10;
appraoch1.splice(randomIndex, 0, num)
})

//approach 2
arr.forEach((num)=>{
const obj = {sort: Math.random(), value: num};
appraoch2.push(obj)
})

appraoch2 = appraoch2.sort((num1,num2)=>num1.sort-num2.sort).map((obj)=>obj.value)

console.log("appraoch1",appraoch1);
console.log("appraoch2",appraoch2);
