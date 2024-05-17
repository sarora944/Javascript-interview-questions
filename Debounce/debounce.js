// debounce function

function debounce(callback, time){
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(callback, time)
    }
}

const fetchFn = debounce(()=>{
    // const resp = await fetch('https://fakestoreapi.com/products/')
    // console.let(resp)
    console.log({name: "name"})
}, 2000)

fetchFn()