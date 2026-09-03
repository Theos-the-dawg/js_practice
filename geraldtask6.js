function LowValue() {
    let numbers = [12,34,56,1,-12,-34,0,-56,-1];
    let lowest = Math.min(...numbers);
    console.log(lowest);
    return;
};
//LowValue();

function NoteToCoin(Amount,CoinValue){
    //let BankNote = Amount / CoinValue;
    let Bankscore_20 = Amount/ CoinValue[0];
     let Bankscore_10 = Amount/ CoinValue[1];
    console.log(Bankscore_20,Bankscore_10);
    return;

}
NoteToCoin(46,[20,10]);

function ReverseNumber(value) {
    let reversedNumber = value.toString().split('').reverse().join('');
    return parseFloat(reversedNumber) * Math.sign(value); 
}
console.log(ReverseNumber(12345));
//toString() turns the number into a string
//split('') breaks the string into an array of characters (['1','2','3','4','5']) 
//reverse() flips the array elements in place (['3','2','1'])
//parseFloat()changes the strin gback into a number;
//Math.sign(value) returns 1 for positive numbers and -1 for negative numbers, keeping the original sign intact.