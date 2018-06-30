// Promises:
// It helps us to make asynchronous javascript operations.
// It will return a value in future or after resolve some operation.

// Eg. real time example:
// Suppose you told your friend i will purchase cake for your birthday so he is making promise he will purchase cake so it is promise which will give result in future.
// Promise also return after some time or in future.

// We can make promise with the help of “new Promise” .


const fooPromise = (cake) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(cake);
          if (cake === 'black forest') {
              resolve('nice cake');
          } else {
              reject(new Error('not happy with the cake'));
          }
        }, 1000)
    });
}

const promise = fooPromise('black forest11');

promise
.then((msg) => {
    console.log(msg);
})
.catch((msg) => {
    console.log(msg);
});


// Fire multiple promises at once
// We can fire mutiple promises at one time with the help of Promise.all

const friesPromise = getFries();
const burgerPromise = getBurger();
const drinksPromise = getDrinks();


const eatMeal = Promise.all([
  friesPromise,
  burgerPromise,
  drinksPromise
])
  .then(([fries, burger, drinks]) => {
    console.log(`Chomp. Awesome ${burger}! 🍔`)
    console.log(`Chomp. Delicious ${fries}! 🍟`)
    console.log(`Slurp. Ugh, shitty drink ${drink} 🤢 `)
  });