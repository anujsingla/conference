// IIFE - Immediately Invoked Function Expressions
// benefit
// local scope- It is a common JavaScript design pattern used by most popular libraries
//  (jQuery, Backbone.js, Modernizr, etc) to place all library code inside of a local scope.
// Does not pollute the global namespace
// code safe and secure- It's not called from anywhere else, which is why it is anonymous , 
// but runs just after being created, it keeps your code more safe and secure.
// Creation — Execution — Discarding of a function in one statement (manage browser memory)
// no conflict code with application.

// jquery library link https://code.jquery.com/jquery-3.3.1.js

(function () {
    // logic here
})();

var greeting = 'outside greeting'; 
(function(name) {
    var greeting = 'inside greeting';
    console.log('hello ' +name + ' '+ greeting);
}('hh'));

console.log(greeting);

// IIFE use global variable and expose variable outside from the function
var greeting = 'outside greeting'; 
(function(name, global) {
    var greeting = 'inside greeting';
    window.greeting = 'change inside iife';
    console.log('hello ' +name + ' '+ greeting);
}('hh', window));

console.log(greeting);