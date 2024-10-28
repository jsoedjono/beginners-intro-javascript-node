const people = ["Aaron", "Mel", "John"];
// const one = 1;
const one = new Number(1);
const str = "Hello World";
const b = true;
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};

function sayHello(person) {
  console.log("Hello " + person.firstName);
}

//typeof operator
// Returns a string of the data type primitive. (People is an object)
console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

// instanceof operator
// Returns a boolean of if a value matches the data type  (Instance is matched with Constructor)
console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);


// types can change


//05:06 of 05:40 (15 of 51)
//Equality Gotchas

// let x = 0 == ''; // true, type coerced
// let x = 0 === ''; // false, type respected