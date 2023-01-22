//function cdefinition
function first(x){

    console.log("first");
    x();

}

function second(y){
    console.log("second");


}


first(second);

//type-1


function getTodoCallback(callback1){
    var data = "file data";
    callback1(data);
}

function print(data_y){
    console.log(data_y);
}

getTodoCallback(print);


// one more way
getTodoCallback(function (data_y){
    console.log(data_y);
});