 HEAD
// Execise 1
// let num1 = 20;
// let num2 = 6;
// let sum = num1 + num2;
// console.log(`Sum: ${sum} `)
// let difference = num1 - num2;
// console.log(`difference: ${difference}`)
// let product = num1*num2;
// console.log(`product:${product}`)
// let quotient = num1 / num2
// console.log(`quotient :${quotient}`) 
// let remainder = num1 % num2;
// console.log(`remainder :${remainder}`)

// Exercise 2: area of a rectangle
// let length = 12;
// let width = 8;
// const rectangle(length*width,
// area = length*width
// console.log(area))


// //Excercise 3
const celcius
// let celsius = 30;
// F = (celsius*1.8) + 32
// console.log(celsius)

// Exercise 4: Circle area
// let radius = 5;
// area = 3.142 *( radius * 2)
// console.log(area)

// Exercise 5: power calculator
// const Math.pow(7,3)
// console.log(Math.pow(7,3));

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// const readline = require('node:readline/promises');
// const  {stdin,stdout} = require('node:process'); 
async function BasicCalculator(nums) {
    do{
    nums = [];
        
    
        const rl = readline.createInterface({ input, output });

  num1 = await rl.question("please input num");
    num2 = await rl.question("please input num");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if(num1!==0 && num2!==0){
    const sum = num1 + num2;
    const minus = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
    const remainder = (num1%num2);
    console.log(sum,minus,multiply,divide,remainder);
    }
    // else if(num1===0){
    //     console.log("Goodbye")
    //     exit()
    // }

    } while (num1!=0);

}

BasicCalculator();


async function BasicCalculator2(nums) {
    do {
        const rl = readline.createInterface({ input, output });

  nums = await rl.question("please input num");
    
    
    if(num1!==0 && num2!==0){
    const sum = num1 + num2;
    const minus = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
    const remainder = (num1%num2);
    console.log(sum,minus,multiply,divide,remainder);
    }
  

    } while (num1!=0);
  

}

//BasicCalculator2();

