const curry = (a)=>{
    return function inner(b) {
        if(b){
            return curry(a+b);
        }
        return a
    }
}
console.log(curry(5)(6)(10)(4)())