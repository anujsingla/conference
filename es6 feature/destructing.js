// Destructing:
// it means get value from the array and objects.

// object destructing:
// ES5
const Zell = {
    firstName: 'Zell',
    lastName: 'Liew'
}

let firstName = Zell.firstName // Zell
let lastName = Zell.lastName // Liew

// ES6

let { firstName, lastName } = Zell

// if we get different name in the value
const Zell = {
    firstName: 'Zell',
    lastName: 'Liew'
}
let {
    firstName : a, // source always right in the destructing
    lastName : b = 2 // default value
 } = Zell || {} // pass default value.

 console.log(a + b);

// if value is not present then we get undefined value.

let course = {
    name: 'abcd'
}
  
let { package } = course
  
console.log(package) // undefined

// we can give default value.

let course = {
    name: 'abcd'
}
  
let { package = 'ok', name } = course
  
console.log(package) // ok

// destructing array
// in array we use square bracket ([]) and object we use curly braces( {})

let [one, two] = [1, 2, 3, 4, 5]
console.log(one) // 1
console.log(two) // 2

let [one, two, three] = [1, 2]
console.log(one) // 1
console.log(two) // 2
console.log(three) // undefined

// if we want 1 value and rest array value in the other array just use like this.
let scores = ['98', '95', '93', '90', '87', '85']
let [first, second, third, ...rest] = scores

console.log(first) // 98
console.log(second) // 95
console.log(third) // 93
console.log(rest) // [90, 87, 85]

// while declare function we can use both feature
function foo ({
    firstName = 'Zell',
    lastName = 'Liew'
  } = {}) {
   console.log(firstName + ' ' + lastName)
}

foo() // Zell Liew
foo({firstName: 'Zell'}) // Zell Liew
foo({firstName: 'Vincy', lastName: 'Zhang'}) // Vincy Zhang