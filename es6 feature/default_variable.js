// default parameters
// pass default parameters in the function if we do not send any parameter in the function call.

// ES5
function foo(x) {
    x = x || 42;
    console.log(x);
}
foo();

// ES6
function foo(x = 42) {
    console.log(x);
}
foo();

// lazy expression in the default parameters

function uniqId() {
    return 'id';
}

function foo(x = uniqId()) {
    console.log(x);
}

foo(); // call uniqId
foo('a'); // donot call uniqId

// tricky question donot ask until clear

var x = 1;

function foo(x = 2, f = function() {return x;}){
    var x = 5;
    console.log(f());
}

foo();
console.log(x);