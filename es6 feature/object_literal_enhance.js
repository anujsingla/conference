// Enhanced object literals

// They have improved 3 things in the object . normally we have object with key:value pair.
// Property value shorthands
// Method shorthands
// The ability to use computed property names(dynamic property name)

// Property value shorthands ES5

const fullName = 'Zell Liew'

const Zell = {
  fullName: fullName
}

// ES6 way
const Zell = {
    fullName
}

// 2. Method shorthands

const anObject = {

    // ES5 way
    aLonghandMethod: function (arg1, arg2) {},
    
    // ES6 way
    aShorthandMethod (arg1, arg2) {},
}

// Computed object property names(dynamic property name)

// ES5
const newPropertyName = 'smile'

// Create an object first
const anObject = { aProperty: 'a value' }

// Then assign the property
anObject[newPropertyName] = ':D'

// Adding a slightly different property and assigning it
anObject['bigger ' + newPropertyName] = 'XD'

// Result
// {
//   aProperty: 'a value',
//   'bigger smile': 'XD'
//   smile: ':D',
// }

// square brackets
const newPropertyName = 'smile'

// ES6 way.
const anObject = {
  aProperty: 'a value',
  // Dynamic property names!
  [newPropertyName]: ':D',
  ['bigger ' + newPropertyName]: 'XD',
}

const ob = {
    a: 'a',
    hello() {console.log(this.a)},
    ['arrow']: 'arrow'
}
console.log(ob)