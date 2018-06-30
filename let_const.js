// var:
// var is a function-scoped. If we declared outside function it is global scope and
// we can use it any function.If we declared var variable inside function then it can not 
// use outside function.
//we have “var” keyword to declare variables. Onces it is declared,
//this variable can be used anywhere in the current scope.

var me = 'hello';
function func () {
 console.log(me) // hello
}
func() // ‘hello’

//In this example we have declared me as a global variable and we can use
// it inside function also.

function sayMe() {
    var me = 'hello';
    console.log(me);
}
sayMe(); // ‘hello’
console.log(me) // Uncaught ReferenceError: me is not defined

// If a function is declared in a function, it cannot use it outside the function.
// So var is a function-scoped.

// let - 
// let is a block-scoped. When we create variable with let it will exist within the block.
// A block is anything within a curly braces.

{
    // new scope block
}
  
if (true) {
 // new scope block
}
 
while (true) {
 // new scope block}
 function () {
  // new block scope
 }
}
 
// const -
// it is also block-scoped. The difference between let and const is that const can not be
// reassigned once declared.
// if you want to freeze object means donot want to change value of the object and 
// avoid add new properties to the object and avoid removed existing properties.

const object1 = {
    property1: 42
};
  
const object2 = Object.freeze(object1);
  
object2.property1 = 33;
object2.property2 = 43;
  
console.log(object2.property1); // 42
console.log(object2.property2); // undefined

function doSomething() {
    for (let x = 0; x < 5; x++) {
       // With the "let" keyword, now x is only accessible in this block.
    }
    // x is out of the scope here
    console.log(x); // x is not defined
}