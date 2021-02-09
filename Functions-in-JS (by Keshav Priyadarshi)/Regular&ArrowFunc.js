//Arrow Function & Regular Function




//Syntax difference
// function getUser(){
//     return{
//         tyype:"abs",
//         payload:"jhdfjdfh"
//     }
// }

// const getUser = () => {
//     return{
//         type : 'GET_USERS',
//         payload : "output"
//     }
// }
// var a = getUser()
// console.log(getUser)






//we dont have to write use {} when we have only one expression in our function
// const result = (a,b) => a + b
// var op = result(3,5)
// console.log(op)



//If there is only one argument then the () are not required 
// const result = a => a * a
// var op = result(3)
// console.log(op)




////If there is only one argument then the () are not required
// const result=_=>console.log("abc")
// result()





//USE OF THIS KEYWORD
// const car = {
//     price:15,
//     color:"Black",
//     description: function(){
//         return `price of the car is ${this.price} lakh and the color is ${this.color} `
//     }
// }
// console.log(car.description())







//USE OF NEW KEYWORD ......ARROW FUNCTION ARE CALLABLE NOT CONSTRUCTIBLE
// function carDes(brand, color, price){
//     this.brand = brand;
//     this.color = color;
//     this.price = price;

//     this.statement = function(){
//         return `The price of ${brand} car is ${price} lakh and the color is ${color}`
//     }
// }
// const carDes=(brand, color, price)=>{
//     return `The price of ${this.brand} car is ${this.price} lakh and the color is ${this.color}`
// }

// let car = new carDes("Mercedes", "Black", 50);
// console.log(car.statement())

// let car2 = new carDes("BMW", "White", 45);
// console.log(car2.statement())
