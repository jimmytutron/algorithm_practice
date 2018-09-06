// Boolean
// Number
// String
// Objects
// Null
// Undefined

// Math {}
// Math.max;
// Math.min;
// Math.random;
// Math.floor;
// Math.ceil;

class Person {
    constructor(name) {
      this.name = name;
    }
    
    getNameWithNumbers(number1, number2) {
      return this.name + number1 + ' ' + numebr2;
    }
  }
  
  const jimmy = new Person('jimmy');
  jimmy.getNameWithNumber(4, 2); // jimmy4 2
  
  const john = {name: 'john'};
  jimmy.getNameWithNumber.call(john, 3, 2); // john3 2
  
  // .apply
  jimmy.getNameWithNumber.apply(john, [3,2]); 
  jimmy.getNameWithNumber.call(john, ...[3,2]);
  
  Math.max.apply/call/bind
  
  function getMax(numbers) {
    return Math.max.apply(Math, numbers);
    // return Math.max.call(Math, ...numbers);
    
  }
  
  
Math.max(2,3,4,5); // this is the way you call it

spacify('hello world') // => 'h e l l o  w o r l d'

function spacify(string){
  return string.split('').join(' ')
}

'hello world'.spacify();

// 'hello world'; document -> Document; window -> Window; 'hello world' -> String

String.prototype.spacify = function() {
  return this.split('').join(' ')
}



// Math.max, Math.prototype.max "static methods"
Math.max = function() {
  
}

function multiply(...arguments) {
  return arguments.reduce((currentNumber, totalMultiple) => totalMultiple * currentNumber, 1)
}

// currentNumber   totalMultiple   returns
// arguments[0]    1               arguments[0] * 1
// arguments[1]    arguments[0]*1  arguments[0]*1*arguments[1]

// let toReturn;
// for (...) {
//   // modify toReturn;
// }
// return toReutn;


/**
 * Review bind, call, apply.
 * Learn basics of properties and methods of HTML Element. (ie, getElementsByTagName, classList)
 * Learn all the methods on Array.prototype.
 * Object.prototype.hasOwnProperty, Object.assign, Object.prototype.keys(), Obejct.prototype.values(0)
 */
 
 const a = () => {
  this = window;
 };
 
 function() {
   const a = function() {
   
   }.bind(this);
 }
 
 const a = function() {
   // this
 }.bind(this);
 
 const a = () => {
   
 }
 
 a.bind(this)();
 
 doSomething('a    b'); // a b
 doSomething('a    b      c'); // a b c
 
 
 function doSomething(string) {
   const trimmedString = string.trim();
   let lastCheckedValue;
   let toReturn = '';
   for (let i = 0; i < trimmedString.length; i++) {
     if (lastCheckedValue === ' ' && trimmedString[i] === ' ') {
       continue;
     }
     lastCheckedValue = trimmedString[i];
     toReturn += trimmedString[i];
   }
   return toReturn;
 }