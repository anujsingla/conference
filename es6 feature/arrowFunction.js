// Arrow function - It is most important feature of the ES6.
// we use fat arrow (=>) between parameters and the body of the function.
// It is used where function keyword is used.It helps to make code shorter.
// It is automatically bind the this object like we are doing in normal function with
// the help of bind method or var self = this.
// it is referenced the this keyword inside arrow function. It is automatically lexical
// go 1 level to the scope and used this keyword in the surrounding scope.


// In normal function, we are using function keyword, return statement and blocks{}.

function foo(x,y) {
    return x + y;
}

// In Arrow function we donot need to use function keyword, return statement and block.
var foo = (x,y) => x + y;

// arrow function variations

// without parameter
var f1 = () => 12;

// single without parameter
var f2 = x => x * 2;

// two parameter
var f2 = (x,y) => x * y;

// two parameter and block and return statement
var f3 = (x,y) => {
 var z = x * 2 + y;
 y++;
 x *= 3;
 return (x + y + z) / 2;
};

// uses in the callback
var a = [1,2,3,4,5];
a = a.map( v => v * 2 );
console.log( a );

// bind this object
// es5
var objs = {
    id: 42,
    foo: function () {
        console.log(this); // objs object
        var that = this; // this solution or bind this
        setTimeout(function() {
            console.log(this); // window object
            console.log(that.id);
        }, 100);
    }
}
objs.foo();

// arrow function
var objs = {
    id: 42,
    foo: function () {
        console.log(this); // objs object
        setTimeout(() => {
            console.log(this); // objs object
            console.log(this.id);
        }, 100);
    }
}
objs.foo();