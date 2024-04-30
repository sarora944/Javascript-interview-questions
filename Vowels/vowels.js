const countVowels=(str)=>{
    let count =0;
    for(let char of str){
        if(char.match(/[aeiou]/gi)){
            count++
        }
    }
    return count
}

console.log(countVowels('Why do you Ask?'))