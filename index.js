console.log("hello world");


// Function : A block of code which you want to use multiple times, so you define or declare it once, and then  use it wherever you want as many times .

//I : NORMAL FUNCTION

// function add (){    //defining a function or declaring a function
//     console.log(4+3);
// }

// add();      // calling a function or invoking a function 


//II : FUNCTION WITH PARAMETERS

// a and b are known as parameters, they gets used inside the definition of the function 


// function additionTwoNum (a, b) {   
//     let c = 10; 
//     console.log(a+b+c);               
// }

// additionTwoNum("Kiran",11);  

// additionTwoNum(12,13)           // 12 and 13 are known as arguments, they gets passed inside the function.

// additionTwoNum(2,3);



//III : FUNCTIONS WITH RETURN STATEMENT AND PARAMETERS

//Whenever you are having a return statement in your function, then at the time of invokation of the function, do not invoke the function directly , instead of that , assign the invokation of the function to a variable and the value which you are returning from the function will be now stored in this new variable which you have created.


// function doubleTheValue (num){  
//     const value = num * 2;  
//     return value;
// }
// // doubleTheValue(12);

// const newValue = doubleTheValue(12);
// console.log("Double function call",newValue);


// function handleSubmit (){
//     const element = document.getElementById("name");
//     console.log(element.value);
// }


// regular functions

// function expression : 
// You can create a function and assign the function's value to a variable. This is known as function expression.
const a = function (){
    return 1;
}

console.log(a());


// arrow function
const displayUserInfo = () => {     // arrow function came in the latest version of JS : ES6
    console.log("USER INFORMATION");
}


displayUserInfo()


var x = 10;

function A(){
    // var x;
    console.log(x);

    function B(){
        var x = 30;
        console.log(x);
    }

    B();
}

A();
console.log(x);

//the value of the variable got shadowed , which means when you are inside the block you will be accessing the value of the variable which is defined inside the block not the one which in outside : SHADOWING IN JS

