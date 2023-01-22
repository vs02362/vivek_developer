function getTodoCallback(callback1){
    setTimeout(function(){
        var data = {text: "data complete"};
        callback1(data);
    },2000);    
}

function abc(data){
console.log(data.text);
}