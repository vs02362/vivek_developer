async function f(){
    console.log("async function");
    
    let result = await Promise;
    let result1 = await Promise1;
    
    console.log(result);
    console.log('hello');

}

let Promise =new promise(function(reject,resolve){
    setTimeout(() => {
        resolve('promise resloved');
        
    }, 2000);

})
f();