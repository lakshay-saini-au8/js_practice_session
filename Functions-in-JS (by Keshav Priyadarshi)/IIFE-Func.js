//IIFE stands for Immeadiately Invoked Function Expression this is also called self-executing Anonymous function

//first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
// (function(){
//     var a = "function called"
//     console.log(a)
// })()


var b = (function(x,y){
    var a = "variable called"
    console.log(x+y)
    return a
})(5,5)
console.log(b)