this
the concept of call => apply => bind is very related to understanding this keyword.


What is this?
this is a keyword in JavaScript, and the existence of it is to allow us in,

1.Reusing functions in different contexts.
2.Identifying which object to focus on when a method is invoked.


Remember that, when an Execution Context is created in JavaScript, it creates a special entity called, this.


In the Global execution context, this is equal to the global object window.
In the Function execution context, this is equal to the window object by default but, the behavior changes based on the phenomenon called binding. Do not confuse it with the bind() method in JavaScript. The bind() method is just yet another way of binding stuff. There is more to it. We will see that in a while, and 90% of the usage of this are around it.



-----------------------Implicit binding---------------------------

Implicit binding covers most of the use-cases we deal with the this keyword. In implicit binding, left of the dot(.) operator adjacent to a function at invocation time determines what this is binding to.



var user = {
    name: 'john',
    address: 'usa',
    getName: function() {
        console.log(this.name);
    }
};

user.getName();


Explanation: In the above example, this bound to the user object as the left of the dot(.) operator adjacent to the function getName() is a user object. Hence this.name is going to log john in the console.


function decorateLogName(obj) {
    obj.logName = function() {
        console.log(this.name);
    }
};

var tom = {
    name: 'Tom',
    age: 7
};

var jerry = {
    name: 'jerry',
    age: 3
};

  decorateLogName(tom);
  decorateLogName(jerry);

  tom.logName();
  jerry.logName();


Explanation: In the above example, we have two objects, tom and jerry. We have decorated(enhanced) these objects by attaching a method called logName().

Just notice when we invoke tom.logName(), the left of the dot(.) operator adjacent to the function logName() is the tom object. Hence this bound to the tom object and it logs the value tom(this.name is equal to tom here). Same applies when jerry.logName() is invoked.

Clear enough?


var Cartoon = function (name, age, friend) {
      return {
          name: name,
          age: age,
          logName: function() {
              console.log(this.name);
          },
          friend: {
              name: friend,
              logName: function() {
                  console.log(this.name);
              }
          }
      }
  };

  var tom = Cartoon('Tom', 7, 'Jerry');
  tom.logName(); // Should print 'Tom'
  tom.friend.logName(); // Should print 'Jerry' https://blog.greenroots.info/javascript-this-is-easy-and-what-do-you-need-to-know-about-it-ckca1pqqr00gmmns13n921wib


  Explanation: Here we have a class called, Cartoon. Cartoon has a method called, logName(). It also has a property called, friend which is an object. To make things a bit tricky, the object friend has a method called logName() as well.

When the Cartoon class is instantiated, we get an instance called tom passing the name, i.e., Tom, age as 7, and the friend's name as Jerry.

When tom.logName() invokes, the left of the dot(.) operator adjacent to the function logName() is tom and this bound to it. So this.name here points to tom's name, which we have passed as Tom before.

When tom.friend.logName() invokes, the left of the dot(.) operator adjacent to the function logName() is, friend. So this points to the object friend and the this.name is friend's name, i.e, Jerry




----------------------------Explicit binding-----------------------------

We are aware that JavaScript creates an environment to execute the code we write. This environment includes stuff beyond the actual code we write.

It takes care of the memory creation for variables, functions, objects, etc., in the creation phase. Finally, executes the code in the execution phase. This special environment is called JavaScript Execution Context. You can read more about it from here.

There are many such environments(Execution Contexts) in a JavaScript application. Each Execution Context operates independently from each other. But at times, we may want to use stuff from one execution context to another. That is where explicit binding comes into play. We can bind stuff from one context into the context of a different environment for execution using this.


In Explicit binding, we can call a function with an object when it is outside of the object's execution context.

There are three extraordinary methods, call(), apply(), and bind(), help in achieving explicit binding.

--------------------call() method--------------
With the call() method, the context with which the function has to be called will be passed as a parameter to the call().


var getName = function() {
    console.log(this.name);
}
var user = {
    name: 'john wick',
    address: 'usa'
};

getName.call(user);



Explanation: What we see here is, the call() method is invoked on a function called getName(). The getName() function just logs this.name. But what is this here? That gets determined by what has been passed to the call() method.

Here this will bind to the user object because we have passed the user as a parameter to the call() method. Hence this.name should log the value of the user object's name property, i.e., GreenRoots.

In the above example, we have passed just one argument to call(). But, we can pass multiple arguments to call(), if required.



var getName = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
var user = {
    name: 'john wick',
    address: 'usa'
};

var hobbies = ['fighting', 'killing'];
getName.call(user, hobbies[0], hobbies[1]);


Explanation: As you see here, we can pass an array as arguments, which is much more convenient than passing one by one.

When you have only one value argument or no value arguments to pass, use call(). When you have multiple value arguments to pass, use apply().



-----------------------apply() method-----------------------

The hectic way of passing the arguments to the call() method can be solved by another alternate method called apply(). It is the same as call() but allows passing the arguments more conveniently.


var getName = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
var user = {
    name: 'john wick',
    address: 'usa'
};

var hobbies = ['fighting', 'killing'];
getName.apply(user, hobbies);

// var newFn = getName.bind(user, hobbies[0], hobbies[1]);

// newFn();

Explanation: As we see above, the getName.bind() doesn't invoke the function getName(). It returns a new function, newFn and we can invoke is as, newFn().



-----------------------------new binding-------------------------
A Constructor function is created with the new keyword. Here is an example of a Constructor function,


var Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.animal);
    }
};


// We can create the objects using the new keyword as,

var tom = new Cartoon('Tom', 'Cat');
var jerry = new Cartoon('Jerry', 'Mouse');

The constructor function's new binding rule states that when a function is invoked with the new keyword, the this keyword inside the function bind to the new object being constructed.

---------------------
Sounds complex? Ok, let's break it down. Take this line,

var tom = new Cartoon('Tom', 'Cat');
Here the function Cartoon is invoked with the new keyword. Hence this will be bound to the new object created here, tom.



-------------------------------Global Object binding--------------------------
What will be the output of this code execution? What is this bind to here?

var sayName = function(name) {
    // 'use strict';
    console.log(this.name);
};
window.name = 'john';
sayName();


if the this keyword is not resolved with any of the above bindings, implicit, explicit or new then, the this binds to the window(global) object.




-------------------------Arrow functions, no binding?----------------------
ES6 introduced arrow functions, which don't provide their own this binding. As we have seen so far, in regular functions, the this keyword represented the object that called the function, which could be the window, the document, user-defined, or whatever.

With arrow functions, the this keyword always represents the object that defined the arrow function.

Arrow functions use lexical scoping and ‘this’ refers to its current surrounding scope. Arrow functions don't bind their own scope but inherit it from the parent.


var testHobbies = {
    hobbies: ['Cricket', 'Football', 'Blogging'],
    name: 'Alex',
    logHobbies() {
        this.hobbies.forEach((elem) => {
        console.log(`${this.name} knows ${elem}`);
    });
    }
}
testHobbies.logHobbies()

Here the logHobbies() method iterates through the hobbies and logs them into the console. Notice, we are using an arrow function in forEach. The this inside the arrow function would bind to the object testHobbies as there is no this binding for the arrow functions, and it always binds to the parent one.


// Alex knows Cricket
// Alex knows Football
// Alex knows Blogging




Now let us bring a twist to it. Notice the modification I have made below. Instead of an arrow function, the for-each uses a regular function.



var testHobbies = {
    hobbies: ['Cricket', 'Football', 'Blogging'],
    name: 'Alex',
    logHobbies() {
        this.hobbies.forEach(function(elem){
        console.log(`${this.name} knows ${elem}`);
    });
    }
}


What do you think, this would be bound to here inside forEach? It is not an arrow function. It is a regular function, and it has its own execution context. In that execution context, there is nothing called a name. Hence this.name is undefined.


Hence the output will be,

// undefined knows Cricket
// undefined knows Football
// undefined know Blogging



---------------------Use Strict and this----------------------
Normally, in global scope this keyword refers to window object,

<script>
    console.log(this);  //returns window object.
</script>


In JavaScript strict mode also, this keyword in global scope returns window object. However, it behaves differently in the function scope.



<script>
    "use strict;"
    console.log(this);

    function testThis() {
        "use strict";
        console.log('testThis', this);
    }

    testThis();
</script>



// It will log the following output in the console,

// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// testThis undefined




Conclusion
Yes, Understanding this is easy! But at the same time, it could be challenging to comprehend the rules and usage of this. We will understand this better when we focus on the question, Where is the function invoked?

In most of the cases, the usage would be with Implicit Binding. There will be used with explicit binding with the call(), apply(), and bind(). With many of the JavaScript-based frameworks like Reactjs, Angular, etc., we use arrow functions.

// https://www.youtube.com/watch?v=zE9iro4r918&feature=youtu.be