// lexical this object - 
// this object value is set by the function that call it. 
// Every function defines its own this object value.

//1. When this object is called outside function than it represent window object.
console.log(this) // Window

2. // When this is called inside simple function call this object is represent as a 
// global object.
function hello () {
    console.log(this)
}
hello() // Window

 // 3. When this object is called inside object method, this object is represent as a object.
 let o = {
    sayThis: function() {
      console.log(this);
   }
 }

 o.sayThis() // o

 4. //When the function is called as a constructor , this refer to the newly constructed object.
 // when function is called with the new keyword it is doing 4 things
 // 1. create blank object like var obj = {}
 // 2. assign the prototype to the object(set the prototype) Object.setPrototypeOf(obj, Person);
 // 3. execute contructor with this means assign value in the objec with this
 // 4. return value obj

 function Person (age) {
    this.age = age
}
Person.prototype.talk = function() {
    console.log('talk method');
}
let greg = new Person(22) // function call a constructor this represent object
let thomas = new Person(24)
console.log(greg) // this.age = 22
console.log(thomas) // this.age = 24
console.log(thomas.talk()); 

// 5. When used in an event listener, this object is represent an element that fired the event.

button.addEventListener('click', function() {
    console.log(this) // button
});


// donot use arrow function inside object because this represent window object.
const objs = {
    id: 'id',
    foo: () => { // wrong
        console.log(this.id); // it represent window object.
    }
}

objs.foo();