// First, What is Binding?
// In JavaScript, a Lexical Environment is where your code is physically written. In the example below, the variable name is lexically inside the function sayName().

function sayName() {
  let name = 'someName';
  console.log('The name is, ', name);
}
sayName()


// Parser: Parser or Syntax Parser is a program to read your code line-by-line and understand how it fits the grammar defined by the Programming Language and what it is expecting to do. As you have seen in my previous post, the JavaScript Syntax Parser takes the array of tokens and create an Abstract Syntax Tree(AST) so that it can be processed further to create executable code.


// Context: The best way to visualize the word Context is, think of a circle(or Wrapper) surrounding the topic of your interest(or the 'Context of' what we are discussing). Context is a set of circumstances or facts that surround a particular event, situation, etc.

// Execution Context: It means the code currently running and everything surrounding it helps run it. There can be lots of Lexical Environment available but, the one Currently running is managed by the Execution Context.


// Execution Context
// As Software Developers, we like(or wish) to write code so that it looks less complicated, can be maintained easily, and follows some practices, standards, etc. With the same analogy, the Execution Context allows the JavaScript engine to maintain the code better and manage the complexities.



// Whenever a code is run in JavaScript, it runs within the Execution Context, which is a combination of your code plus, all that we have seen here (Tokenizing, Parsing, Code Generation, etc.) done by the JavaScript Engine.




// Global Execution Context(GEC)
// Whenever a JavaScript Code first runs, it creates something called Global Execution Context(GEC). Even when you do not have a single line of code in a .js file and load it, you will have the Global Execution Context created.



// What does the word Global mean here? Anything and Everything Outside a Function is Global.

// Global Execution Context is also called the base execution context. It creates two special things for you,

// A global object called window for the browser. If you use JavaScript at the server side, say, NodeJs, it won't be the window object.

// A global variable called this.


console.log(window === this)


var name = 'Tom';

function sayName() {
  console.log(this.name); 
}


// Global Execution Context Phases

// There are two phases created in Global Execution Context, i.e., Creation and Execution phases.
// Creation Phase:
// In this phase, two special things get created, i.e., a global object window for browser and a variable called, this.
// Memory gets allocated for the variable name and the function sayName().
// The variable name gets initialized by a special value called undefined. The function sayName() gets placed directly into the memory.


// Execution Phase:
// In this phase, the actual code execution starts. For the example above, the only thing to happen is to assign the value Tom to the variable name. Please note, we do not invoke the function sayName() though we have defined it. Hence this function will not get executed.


// Function Execution Context(FEC)
// A Function Execution Context gets created when a function is invoked.

// Let us see the following example to understand this concept. In this example, we have a global variable called name, which is assigned a value Tom. We have a function called tom(), which logs the name. At last, we invoke the function tom().


COPY
var name = 'Tom';

function tom() {
  console.log(this.name + ' Runs');
}

// Invoke the function tom()
tom();