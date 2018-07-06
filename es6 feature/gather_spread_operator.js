// Gather and spread operator
// Gather operator : three dot new operator (...)
// it is depend on the use where and how it is used called spread/rest operator

// gather operator
// it takes list of values and combine in arrays.
// pack all comma separated arguments straight into an array.

// ES5 way
function sum () {
    let argsArray = Array.prototype.slice.call(arguments)
    return argsArray.reduce(function(sum, current) {
      return sum + current
    }, 0)
}
sum(1,2,3,4,5,6,7);

// ES6 way
const sum = (...args) => args.reduce((sum, current) => sum + current, 0);

let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...restOfScores] = scores;

console.log(restOfScores) // [90, 97, 95]

function foo(x, y, ...z) {
    console.log( x, y, z );
}
foo( 1, 2, 3, 4, 5 ); // 1 2 [3,4,5]


// spread operator
// it takes array and spread or gives comma spreaded list.

let array = ['one', 'two', 'three'];

// These two are exactly the same
console.log(...array); // one two three

function foo(x,y,z) {
    console.log( x, y, z );
}
foo( ...[1,2,3]); // 1 2 3

// concat 2 array
//ES5 we use Array.concat() method
let array1 = ['one', 'two']
let array2 = ['three', 'four']
let array3 = ['five', 'six']

let combinedArray = array1.concat(array2).concat(array3)
console.log(combinedArray);

//ES6 
let combinedArray = [...array1, ...array2, ...array3]
console.log(combinedArray);