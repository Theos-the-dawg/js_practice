
// ## Exercise 1: Basic Calculator

// Write a program that stores two numbers and prints:

// - Sum (+)
// - Difference (-)
// - Product (*)
// - Quotient (/)
// - Remainder (%)

// ```javascript
// let num1 = 20;
// let num2 = 6;
// ```

// **Expected Output**

// ```
// Sum: 26
// Difference: 14
// Product: 120
// Quotient: 3.3333
// Remainder: 2
// ```

function Calculator(num1,num2){
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;
    let floorDivsion = num1 % num2;
    console.log(addition,subtraction,multiplication,division,floorDivsion);

}
Calculator(26,23);


// ## Exercise 2: Area of a Rectangle

// Given:

// ```javascript
// let length = 12;
// let width = 8;
// ```

// Calculate the area.

// Formula:

// ```
// Area = length * width
// ```


function RectangleArea(length,width) {
    const area = (length * width);
    return area;    
};
//console.log(RectangleArea(12,8));



// ---

// ## Exercise 3: Celsius to Fahrenheit

// Formula:

// ```
// F = (C × 9/5) + 32
// F = (C x 1.8) + 32
// ```

// Convert:

// ```javascript
// let celsius = 30;
// ```

// ---

function TempConverter(Degrees){
    const Fahreinheight = (Degrees * 1.8 + 32);
    return Fahreinheight;
}
//console.log(TempConverter(4));



// ## Exercise 4: Circle Area

// Given:

// ```javascript
// let radius = 5;
// ```

// Calculate the area of the circle.

// Formula:

// ```
// π × r²
// ```

// Hint:

// ```javascript
// Math.PI
// ```

// ---
 function CircleArea(RadiusValue){
    area = Math.PI * (RadiusValue * RadiusValue);
    return area;  
 }
 //console.log(CircleArea(5));


// ## Exercise 5: Power Calculator

// Calculate:

// ```
// 7³
// ```

// Use:

// ```javascript
// Math.pow()
// ```

// or

// ```javascript
// **
// ```
function PowerCalculator(){
   const power = Math.pow(7,3);
    return power;
}
//console.log(PowerCalculator());