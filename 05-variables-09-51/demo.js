// var = function scoped, 2.can be changed in scope, 3.available before declaration
var hello = "Hello";

console.log(hello);
hello = "Hello World";
console.log(hello);

// block scoped, can be changed in scope, only avaiable after declaration
if (true) {
    //console.log(world); this makes error because block scoped
    let world = "Hello World nopes";
    console.log(world);
    hello = "Hello";
    console.log(hello);
}
hello = "forlet";
console.log(hello);
// console.log(world);

// const is block scoped, like let
// 2. cannot be changed
// 3. 
const aaron = "Aaron";
console.log(aaron);

// aaron = "Aaron Powell"


//what to use when?
//1. const by default
//2. let in loops
//