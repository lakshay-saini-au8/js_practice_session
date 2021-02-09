//1. In pure function, the return value is only depend upun the argument we pass
//2. it has no side effects means that it always return the same output again and again irrespective how many we call the function. for example bank



// var outside_var = 46
// var count = 9

// this function doesnt depend upon some external value or not changing any value like count. so it is pure function
// const add = (x,y) => { 
//     return x+y
// }

// console.log(add(6,4))









//this function changes the external value so it is impure func
// const count_increment = () => {
//     count += 5
//     return count
// }
// console.log(count_increment())





//this function depends upon external value so it is impure function
// const depend = (data) => {
//     return count + data
// }
// console.log(depend(13))







// var arr = [2,4,6,8]

// arr.map((items)=>{
//     console.log(
//         items*items
//     )
// })

// console.log(arr)


// arr.forEach(i=>console.log(i*2))
// console.log(arr)







