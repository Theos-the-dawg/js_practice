// Math and Logic

// * **Even or Odd Checker** **: Write a function that checks if a number is even or odd using the modulos operator (**`%`).

function EvenOrOdd(number){
    if(number  % 2 === 0){
        console.log(`${number} is even`);
    }
    else{
        console.log(`${number} is odd`);
    }

};
//EvenOrOdd(15);


// * **Temperature Converter** **: Create a function that converts Celsius to Fahrenheit.  **

function TempConverter(CelsiusToFahreinheightValue) {
    const Fahreinheight = (CelsiusToFahreinheightValue * 1.8 + 32);
    return Fahreinheight;
};
console.log(TempConverter(15));


//   * **Fraction form:** °F = (°C × 9/5) + 32
//   * **Decimal form:** °F = (°C × 1.8) + 32
// * **Tip Calculator** **: Take a bill amount and a tip percentage, then return the final total.**


function BillTotal(amount) {
    tip = (amount * 10/100);
    totalbill = (tip + amount);
    return totalbill;
}
console.log(BillTotal(680));



// Strings & Arrays

// * **String Reverser** **: Take a word as input and return it spelled backward.**

const InputWord = "Hello World"
const ReverseString = InputWord
for (let index = 0;index = InputWord.length - 1; index --) {
    ReverseString 
}
//console.log(ReverseString);




//InputWord**Vowel Counter** **: Count how many vowels (**`a, e, i, o, u`) are in a given sentence.


function CountVowels(string) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for(const char of string){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(CountVowels("Let us see magic"));
// * **Find Maximum** **: Loop through an array of numbers to find the largest value.**

function LoopNums() {
    const MyArray = [1,2,3,4,5];
  
        
    }

// * **Filter Negative Numbers** **: Remove all negative numbers from an**
