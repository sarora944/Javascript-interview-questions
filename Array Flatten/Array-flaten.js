const flattenArray = (arr)=>{
    return arr.flat(Infinity); 
 }
 
 const arr = [[1,2],[3,4,[7,8]],[2,4,[2,3]]]
 console.log(flattenArray(arr))