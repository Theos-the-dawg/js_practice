// console.log(2%2);
// console.log(95/2);
// const num = 95
// console.log(Math.floor(num/2))

// const num1 = parseFloat('0000000.1');
// const num2  = parseFloat('0000000.2');
// const result = (num1 + num2);
// console.log(result)


//MATH AND LOGIC
function EvenOrOdd(num){
    const checker = (2 % Number(num))
    if(checker === 0){
        console.log(`${num} is even`)
    }
    else{console.log(`${num} is odd`)}
}
//EvenOrOdd(2)
const TempConverter = (degrees)=>{
const result = (degrees * 9/5)+32;
return console.log(result); 
}
//TempConverter(20);

const TipCalculator = (tip,amount)=>{
   console.log( (tip / amount *100 + amount));
}
//TipCalculator(10,200);

///STRINGS AND ARRAYS

function StringReversal(word){
    let dex = word.length;
    for(dex;dex>-1;dex--){
    const result = word[dex]
 console.log(result)    
}
   }
//StringReversal('Gerald');


function VowelCounter(text){
    const vowels = ['a','i','o','u','e'];
    const counted_vowels = [];
    text.toLowerCase().trim();
for(let i=0;i<text.length;i++){
    const element = text[i];
    for(let index= 0; index<vowels.length;index++){
        let value = vowels[index];
        if(element === value){
            //console.log(value);
           counted_vowels.push(value);
           console.log(counted_vowels)
        }
    }
}

}
VowelCounter('Hi Mattt')

function findmax(array){
console.log(array);
console.log( array = array.sort((a, b) => a - b)); 
console.log(array.at(-1));
}
//findmax([10,5,3,45,89])