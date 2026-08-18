// The Classic FizzBuzz

// * **Task:** Loop through numbers from 1 to 50. [[1](https://www.reddit.com/r/ADHD_Programmers/comments/1cog4e4/beginner_friendly_exercises_for_practicing/), [2](https://www.studocu.com/en-za/document/university-of-johannesburg/development-software-1a/loop-and-conditional-exercises-javascript-practice/163404230)]
// * **Condition:**

//   * **If a number is divisible by 3, print "Fizz".**
//   * **If a number is divisible by 5, print "Buzz".**
//   * **If it is divisible by both 3 and 5, print "FizzBuzz".**
//   * **Otherwise, just print the number.**

// for (index = 0;index < 50;index ++){
//     if (num in index % 3) {
    
//         console.log("Fizz");
//         };
// }
function FizzBuzz(){
for (index = 0;index <51;index++){
    console.log(index);
    if(index %3 === 0 && 5 ===0){
        console.log(index,"Fizzbuzz");
    }
    else if(index %3 ===0){
        console.log(index,"Fizz");
    }
    else if(index %5 ===0){
        console.log(index,"Buzz");
    }
    else{
        console.log(index)
    }
}
};
FizzBuzz();


//Grade Predictor
//**Task:** Create an array of numerical scores (e.g., [85, 42, 92, 73, 60]). Loop through each score.Condition: Convert each number into a letter grade:90 or above → "A"80 to 89 → "B"70 to 79 → "C"Below 70 → "F"Output: Print each score and its corresponding grade.

function NumericalScores(){
    let NumericalScore = [20,30,40,50,60,70,80,90,100];
    for (let number of NumericalScore){
         if (number >= 80){
        console.log(`Grade A:${number}`);
    }
    else if(number >=70){
        console.log(`Grade B:${number}`);
    }
    else if(number >=60){
        console.log(`Grade C:${number}`);
    }
    else if(number >=50){
        console.log(`Grade D:${number}`);
    }
    else{
        console.log(`Grade F:${number}`);
    }
    }
   
}
//NumericalScores();

// Filter and Sum an Array

// * **Task:** Given an array of mixed positive and negative numbers (e.g., `[10, -5, 23, -2, 0, 14, -8]`), iterate through it.
// * **Condition:** Check if the number is greater than zero.
// * **Output:** Calculate and print the final sum of **only** the positive numbers.

function NumberLine() {
    let Integers = [10,-5,23,-2,0,14,-8];
    let positiveNum = 0;
    for (const value of Integers) {
        if(value > 0){
            positiveNum += value;
        }
        console.log(positiveNum);
    }
    
}
//NumberLine();