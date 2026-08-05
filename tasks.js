// Coding Practice in JS Please ensure that all you questions are functions for this task.

// ###Question 1###

// 1. 1)Create a js function that for loops through an array and show the first and last index of the array.
// 2. 2.1)Create a nested object that is linked to a person's user data eg name email and surname etc.  if that user is older than 65 log that they are senior if they are 64-19 log mid life and if under 18 a minor
// 3. 2.2)Create a function that will loop through every value in a object via only the name key in your nested array.

//Question 1

const  nums = [1,2,3,4,5,6,7,8,9,10];
function get_indexes(array){
const first_index = array[0];
const last_index = Number(array.length) - 1;
const last  = array[last_index];

console.log(`the first index is ${first_index} and the last index is ${last}`)

}
//get_indexes([1,3,5,7,9])

function question_2(age){
        const user = {
        "details":{"name":"","surname":"","age":age},
        "info":{"race":"African","country":"SA"}
    }
const user_age =  user.details.age

   if(user_age===65 || user_age>65){
    console.log(`your age is ${user_age} you are a senior citizen`);
   }
    else if(user_age===18 || user_age>18){
     console.log(`your age is ${user_age} you are a mid life citizen`)
    }
    else {
     console.log(`your age is ${user_age} you are a minor`);
    }
}
//question_2();
const your_name = "motheo";
console.log(typeof(your_name));

const names = {"name":["Motheo","Master","Gerald"],
}
function Question2_1(){
 for(let i = 0;i<names.name.length;i++){
   console.log( names.name[i]);
 } 

}
//Question2_1();