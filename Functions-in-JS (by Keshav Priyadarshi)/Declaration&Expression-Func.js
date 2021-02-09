//Function expression & Function Declaration

//SYNTAX DIFF.
//function declaration
// function abc(){
//     console.log("Hello-1")
// }
// abc()

//function expression
// const abc2 = function(){
//     console.log("Hello-2")
// }
// abc2()
    






//calling the function
//function declaration:- we can call the function before function definition
abc() //noerror
function abc(){
    console.log("Hello-1")
}

//function expression:-we cannot call the function before function definition
abc2() //ReferenceError: Cannot access 'abc2' before initialization 
const abc2 = function(){
    console.log("Hello-2")
}
// so what we learnt from this is function declaration are hoisted means that when we run our code then browser scan our whole code and it looks for the variable declaration and function declaration ....but function expression are not being hoisted
//in function expression, variable name is hoisted but the actual function is a value that is assigned later.....

