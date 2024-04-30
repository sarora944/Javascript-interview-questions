//Given an array and chunk, divide the array into many subarray
//where each subarray is of length size
// ex - chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]

const chunk = (array, size)=>{
    const result = []
    let index =0;

    while(index< array.length){
        result.push(array.slice(index, index+size))
        console.log("sliced array", array.slice(index, index+size))
        index += size
    }
    return result
}
console.log(chunk([6, 12, 34, 40, 5], 2))
