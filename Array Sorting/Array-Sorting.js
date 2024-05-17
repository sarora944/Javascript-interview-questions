// array of object, sorting on the basis of id in ascending order

const arr = [{
    id: 2,
    name: "abc"
}, {
    id: 20,
    name: "fds"
}, {
    id: 9,
    name: "frf"
}, {
    id: 1,
    name: "324"
}, {
    id: 12,
    name: "997"
}, ]

const arraySorting = (arr)=>{
    const newArr = [...arr]
    newArr.sort((obj1,obj2)=>obj1.id - obj2.id)
    return newArr
}

console.log(arr)
console.log(arraySorting(arr))
