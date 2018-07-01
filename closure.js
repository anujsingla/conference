// closure

// what is the output of this function very simple
// it will cover closure, settimeout, IIFE, es6

function greet() {
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
      }, 3000);
    }
}

greet();



function greet(whattosay) {
    return function (name) {
        console.log(whattosay + '' + name);
    }
}
var sayhi = greet('Hi');
sayhi('Tony');

// closure function factor - any function that run function is called function factory.

function makeGreeting(language) {
    return function(firstName, lastName) {
        if (language === 'en') {
            console.log('hello' + firstName + lastName);
        }
        if (language === 'es') {
            console.log('hola' + firstName + lastName);
        }
    }
}

var greetEng = makeGreeting('en');
var greetSp = makeGreeting('es');

greetEng('JohnEn', 'Doe');
greetSp('JohnSp', 'Doe');

//closure Write a function that will loop through a list of integers and print 
//the index of each element after a 3 second delay.

function greet() {
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function() {
        console.log('The index of this number is: ' + i);
      }, 3000);
    }
}
greet();

// IIFE closure

function greet() {
    const arr = [10, 12, 15, 21];
    for (var i = 0; i < arr.length; i++) {
      // pass in the variable i so that each function 
      // has access to the correct index
      setTimeout(function(i_local) {
        return function() {
          console.log('The index of this number is: ' + i_local);
        }
      }(i), 3000);
    }
}

// Let closure

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}


// Real Time Example: 
// Suppose, you want to count the number of times user clicked a button on a webpage.

// 1. Approaches: You could use a global variable, and a function to increase the counter:
// Problem: It is global variable and anybody can changes it value.

var counter = 0;

function ClickCount() {
    ++counter;
    // logic
}

// 2. Approaches: You might be thinking of declaring the variable inside the function
// Problem: Every time function is called, the counter is set to 1 again.

function ClickCount() {
    var counter = 0;
    ++counter;
    // logic
}

// closure

var ClickCount=(function(){
    var counter=0;

    return function(){
     ++counter;
     // logic
    }
})();

<button onclick="ClickCount()">click me</button>

