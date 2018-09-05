//Write a function ‘multiply’ that can take any number of arguments and returns all the numbers multiplied together.

// ES5 Way
// function multiply(){
//     let product = 1;
//     console.log(arguments)
//     for (let i = 0; i < arguments.length; i++){
//         product *= arguments[i]
//     }
//     console.log(product)
// }

// multiply(1, 2, 3)

//ES6 Way
// const multiply = (...arguments) => {
//     let product = 1;
//     for (let i = 0; i < arguments.length; i++){
//         product *= arguments[i]
//     }
//     console.log(product)   
// }

// multiply(1,2,3)

multiply = (...arguments) => arguments.map(x => x * x)

multiply(1,2,3)

