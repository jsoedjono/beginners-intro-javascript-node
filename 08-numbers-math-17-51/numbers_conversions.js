let num1 = '150';
let flo1 = '1.50';

console.log("********Converting strings to integers********");
//Converting strings to integers
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadecimal number

console.log("********Converting strings to float********");
//Converting strings to float
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log("********More Conversion Examples********");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.5')); 
console.log(parseInt('1 + 1'));

//Using Template Literals
console.log(parseInt(`${1 + 1}`));

console.log("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());


//Converting between numbers and strings

//parseInt() and parseFloat()
//Convert numerical strings to numbers
//Adding non-numerical characters can have unintended results
//parseFloat() is for floating point numbers, numbers with decimal points

//toString()
//Convert numbers to numerical strings