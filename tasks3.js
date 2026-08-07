function fizzbuzz(){
    for(let i=0;i<50;i++){
        if(i%3===0 && i%5===0){       
             console.log(i,'fizzbuzz')

        }
        else if(i%3===0){
            console.log(i,'buzz');
        }
        else if(i%5===0){
           console.log(i,'fizz');
        }
    }
}
//fizzbuzz()

function grade_predictor(){
   let grades =  [85,42, 92, 73, 60];

 for(let i = 0 ; i<grades.length;i++){
    const element = grades[i];
 if(element===90 || element>90){
    console.log(element,"A");
 }
 else if(element ===80 || element>80){
    console.log(element,"B")
 }
 else if(element === 70|| element>70){
    console.log(element,"C")
 }
 //option 1 ending 
 else {
    console.log(element,'F')
 }
 //option2 ending
//  if(element<70){
//     console.log(element,"F")
 //}
}
}
//grade_predictor();

function FilterandSumArray(){
let array = [10, -5, 23, -2, 0, 14,-7 ,10,-8];
let total=0;
    for(let i =0; i<array.length;i++){        
        if(array[i]>0){
            total+=array[i];
        }
    }
    console.log(`the sum of the positive values is :${total}`)
} 
FilterandSumArray()