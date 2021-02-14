// objects are the most important data types and building blocks of modern javascript
// premitive data types like number, string, booleans 
// a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

// All primitives are immutable
// Using a string method doesn't mutate the string
// var bar = "baz";
// console.log(bar);               // baz
// bar.toUpperCase();
// console.log(bar);               // baz

// Using an array method mutates the array
// var foo = [];
// console.log(foo);               // []
// foo.push("plugh");
// console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
// bar = bar.toUpperCase();       // BAZ
// console.log(bar)

// "object is an unordered collection of the related data in form of the key and value pairs"

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40
// }
// console.log(person)
// const person = {
//   'fName': 'Tom',
//   'lName': 'Cruise',
//   'age': 40
// }
// console.log(person)

// const fName = 'Tom'
// const lName = 'Cruise'
// const age = 40

// "values in an object can be of absolutely any types"

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40,
//   car: {
//     brand: 'BMW',
//     year: '2021',
//     color: 'red'
//   },
//   movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6']
// }
// console.log(person)

// ACCESSING, ADDING, UPDATING PROPERTIES OF AN OBJECT

// "ACCESSING"

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40,
//   car: {
//     brand: 'BMW',
//     year: '2021',
//     color: 'red'
//   },
//   movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6']
// }

// 1.DOT NOTATION
// console.log(person.fName)
// console.log(person.lName)
// console.log(person.car.brand)
// console.log(person.car.color)
// console.log(person.movies)

// 2. SQUARE BRACKET NOTATION 
// console.log(person['fName'])
// console.log(person['car'])
// console.log(person['car']['color'])
// console.log(person['movies'])

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40,
//   car: {
//     brand: 'BMW',
//     year: '2021',
//     color: 'red'
//   },
//   movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6'],
//   country: 'USA',
//   'most famous movie': 'MI6'
// }

// const property = 'country'
// console.log(person[property])
// console.log(person.property)

// console.log(person['most famous movie'])
// console.log(person.most famous movie)

// ADDING

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40,
//   car: {
//     brand: 'BMW',
//     year: '2021',
//     color: 'red'
//   },
//   movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6']
// }

// person.character = ' Ethan Hunt'
// console.log(person)
// person['city'] = 'New York'
// console.log(person)

// UPDATING
// person.fName = 'Thomas'
// console.log(person)

// person['fName'] = 'Thomas'
// console.log(person)

// DELETING
// delete person.fName
// delete person['fName']
// console.log(person)

// OBJECT METHODS

// "we can define our own methods/functions in an object"

// const myObj = {
//   myMethod1 : () =>{
//     console.log('myMethod1')
//   },
//   myMethod2 : function(){
//     console.log('myMethod2')
//   },
//   myMethod3 (){
//     console.log('myMethod3')
//   }
// }

// console.log(myObj.myMethod1())
// console.log(myObj.myMethod2())
// console.log(myObj.myMethod3())

// const person = {
//   name: 'Tom',
//   run: () => {
//     console.log('Tom is running')
//   }
// }

// console.log(person.run())

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise'
//   run: () => {
//     console.log('Tom is running')
//   }
// }

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   run: function(){
//     console.log(`${this.fName} ${this.lName} is running`)
//   }
// }

// person.run()

// INBUILT OBJECT METHODS
// "all objects in javascript descends from the parent object constructor and that object constructor has many built in methos "


// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40,
//   car: {
//     brand: 'BMW',
//     year: '2021',
//     color: 'red'
//   },
//   movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6']
// }

// Object.keys() --> creates an array containing the keys the object

// const keys = Object.keys(person)
// console.log(keys)

// Object.values() --> creates an array containing  the values of the object
// const values = Object.values(person)
// console.log(values)

// Object.entries() --> creates a nested array of the key value pairs of an object
// const entries = Object.entries(person)
// console.log(entries)

// entries.map((entry) =>{
//   let key = entry[0]
//   let value = entry[1]
//   console.log(`${key} : ${value}`)
// })

// Object.freeze() --> prevents modification to the properties and values of an object and prevents properties from being added or removed

// const user = {
//   username: 'john wick',
//   password: '12345'
// }
// const admin = Object.freeze(user);
// console.log(admin.username)
// console.log(admin.password)
// admin.username = 'john-wick'
// admin.password = 123456
// console.log(admin)
// console.log(user)


// Object.seal() --> prevents new properties from being added or removed to the object but allow the modification of existing properties

// const user = {
//   username: 'john wick',
//   password: '12345'
// }
// const newUser = Object.seal(user)
// console.log(newUser)
// newUser.username = 'robert dw jr'
// newUser.password = '123457890'
// console.log(newUser)
// console.log(user)
// newUser.country = 'USA'
// console.log(newUser)

// delete newUser.username
// console.log(newUser)


// "VALUE V/S REFERENCE"

// pass by value ==> Number, String, Boolean
// pass by reference ==> object, arrays

// let x = 1;
// let y = x;
// x = 2;
// console.log(x)
// console.log(y)


// let firstPerson = 'john wick';
// let secondPerson = firstPerson;
// firstPerson = 'rowert dw jr'
// console.log(firstPerson)
// console.log(secondPerson)


// const actors = ['tom', 'john', 'rowert'];

// const otherActors = actors;

// actors.push('chris')

// console.log(actors)
// console.log(otherActors)


// "when a variable is assigned a premitive data type it just copies that value "
// "on the other hand when a variable is assigned a non premitive data type ,, --> it is given a reference to that object location in the memory"

// **** actors and otherActors points to same location in the memory***


// const person = {
//   name: 'chris'
// }

// const otherPerson = {
//   name: 'chris'
// }

// console.log(person === otherPerson);





//  " the reason behind this is that person and otherPerson contains idenctical object"
// "they still points to two distincts objects stored in different location in memory"



// const person = {
//   name: 'chris'
// }

// const otherPerson = person;

// console.log(person === otherPerson);


//  CLONING
// how can we properly copy it and remove the reference
// how can we create a complete clone of an object or an array

// const numbers = [1,2,3,4,5]
// const copiedNumbers = numbers;
// const shallowClone = [...numbers]

// console.log(numbers === copiedNumbers)
// console.log(numbers === shallowClone)

// numbers.push(6)

// console.log(numbers)
// console.log(copiedNumbers)
// console.log(shallowClone)


// Array.slice()
// const numbers = [1,2,3,4]
// const shallowClone = numbers.slice()
// console.log(shallowClone)
// console.log(numbers === shallowClone)


// OBJECT CLONING

// 1. spread operator

// const person = {
//   fName: 'chris',
//   lName: 'hemsworth'
// }

// const otherPerson = {...person}

// person.age = 37
// console.log(person)
// console.log(otherPerson)



// 2. Object.assign()

// const person = {
//   fName: 'chris',
//   lName: 'hemsworth'
// }

// const otherPerson = Object.assign({}, person)

// person.age = 37
// console.log(person)
// console.log(otherPerson)



// DEAP CLONING

// const person = {
//   fName: 'Tom',
//   lName: 'Cruise',
//   age: 40,
//   car: {
//     brand: 'BMW',
//     year: '2021',
//     color: 'red'
//   },
//   movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6']
// }

// const newPerson = {...person}

// newPerson.fName = 'john'

// console.log(person)
// console.log(newPerson)

// newPerson.car.brand = 'Audi'

// console.log(person.car)
// console.log(newPerson.car)

// const newPerson = {...person, car: {...person.car}}
// newPerson.fName = 'john'
// newPerson.car.brand = 'Audi'

// console.log(person.car)
// console.log(newPerson.car)


// -------------------------DEEP CLONING------------------------------
//  for an object to be deep clone it needs to destroy all the references

const person = {
  fName: 'Tom',
  lName: 'Cruise',
  age: 40,
  car: {
    brand: 'BMW',
    year: '2021',
    color: 'red'
  },
  movies: ['MI1', 'MI2', 'MI3', 'MI4', 'MI5', 'MI6']
}

// JSON.stringify()
// JSON.parse()

const newPerson = JSON.stringify(person)
// console.log(newPerson)

const newPerson2 = JSON.parse(newPerson)
// console.log(newPerson2)

newPerson2.car.brand = 'Audi'

console.log(person)
console.log('----------------------------')
console.log(newPerson2)