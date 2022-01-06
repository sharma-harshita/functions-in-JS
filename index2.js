// First class functions =======
// These  are those functions :
// which can be passed as an argument to a function, 
// can be returned from a function.
// which can be assigned to a variable



// which can be passed as an argument to a function,  also known as callback function
function b (callback){
    callback()
    console.log("B");
}
function a (){
    console.log("A");
}
b(a);


// can be returned from a function.
function displayUser (){
    return function(){
        console.log("Display user");
    }
}


// which can be assigned to a variable
const employ = function(){
    console.log("Hello world");
}

// Higher order functions 
// These are those functions 
// which can take a function as an argument
// or which can return a function.