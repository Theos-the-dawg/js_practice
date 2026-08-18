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