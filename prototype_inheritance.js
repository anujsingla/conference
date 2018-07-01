// prototype inheritance

let animal = {
    eats: true
};
let rabbit = {
  jumps: true
};

// rabbit.__proto__ = animal;
Object.setPrototypeOf(rabbit, animal);

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true
alert( rabbit.jumps ); // true

// prototype can be longer

let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
};
  
let rabbit = {
jumps: true,
__proto__: animal
};

let longEar = {
earLength: 10,
__proto__: rabbit
}

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)



// prototype inheritance with function call this object

let animal = {
    eats: true,
    name: 'animal',
    getAnimalName: function() {
        console.log(this.name);
    }
};
let rabbit = {
  jumps: true,
  name: 'rabbit'
};

// rabbit.__proto__ = animal;
Object.setPrototypeOf(rabbit,animal);

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true
rabbit.getAnimalName() // rabbit


// function constructors and .prototype
// we can make function inside Person object but it will create reference in every object
// we are create using new. so if we made using prototype then it will create only 1 reference
// and create any number of object it increase performance.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

var john = new Person('John', 'Doe');
console.log(john);
console.log(john.getFullName());

var jane = new Person('jane', 'Doe');
console.log(john);
console.log(jane.getFullName());

// prototype vs __proto__

function foo(name) {
    this.name = name;
}

foo.prototype.getName = function() {
    console.log(this.name);
}

// prototype is an property on the function object.
// when we do foo.prototype it will return 2 value
// 1. constructor (function definition) 
// 2. __proto__ ( object)

var hello = new foo('h');

// when we create object with new keyword it will do 4 things
// 1. create new object var ob = {}
// 2. It creates __proto__ on hello and makes it point to foo.prototype 
// so hello.__proto__ === foo.prototype // true
// 3. assign value to the object hello
// 4. return new created object

hello.getName();

// when we do this things javascript check in hello object if it is not find then it is 
// looking in hello.__proto__ and print name.