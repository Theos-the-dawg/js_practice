function LongestName() {
    let NameArray = ["Mark","Thomas","Anthony","Tobechiku","Yuki","Lerato"];
    let NewArray = [];
    for (let index = 0; index < NameArray.length; index++) {
        const element = NameArray[index];
        NewArray.push(element.length);


    }    
}
//LongestName();

function AgeAverage(){
const People = {
    PersonOne:{
        "name":"Theo",
        "surname":"Magath",
        "age":54
    },
    PersonTwo:{
        "name":"Keith",
        "surname":"Shadis",
        "age":56
    }
}
let PeopleAvgAge = (People.PersonOne.age + People.PersonTwo.age) / 2;
console.log(PeopleAvgAge);
//console.log(People);
};


(AgeAverage());