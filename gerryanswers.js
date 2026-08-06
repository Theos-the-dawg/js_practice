
// 1. 1)Create a js function that for loops through an array and show the first and last index of the array.

function FirstAndLastIndex(arr){
    for (let i = 0;i < arr.length; i ++){
        if(i === 0){
            console.log("First index:",i, "value:", arr[i]);
        }
        if(i === arr.length-1){
            console.log("Last index:",i,"Value:",arr[i]);
        }
    }
}
const fruits = ["apple","banana","cherry","date","mango"];
FirstAndLastIndex(fruits)


// 2. 2.1)Create a nested object that is linked to a person's user data eg name email and surname etc.  if that user is older than 65 log that they are senior if they are 64-19 log mid life and if under 18 a minor

function character(age){
    const person = {
        "name":"John",
        "surname":"watford",
        "contact":{
            "email":"john@email.com",
            "phone":"0712345678"
        },
        "age":age,
    };

    if( person.age === 65 || person.age > 65){
        console.log("Senior!")
    }
    else if(person.age >= 19 || person.age < 64)
        {
        console.log("Middle aged!")
    }
    else {
        console.log("Minor!")
    }
}
character(97);




// // 3. 2.2)Create a function that will loop through every value in a object via only the name key in your nested array.
// function showPerson(){
//     for(let key in person){
//         console.log(person[name]);
//     }
// }
// const person = character(23);
// //showPerson(person);

