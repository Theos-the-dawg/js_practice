let question_1 = ()=>{
    let names = ["Mark", "Thomas", "Anthony", "Tobechiku","Yuki","Lerato"]
     let new_array = [];
    for(let i=0;i<names.length;i++){
       
        const element = names[i]
       new_array.push(element.length)
        
      //console.log(new_array)
    }
console.log(new_array)

let min = Math.min(...new_array)
let max = Math.max(...new_array)

}
//question_1()
let users = { 
     person_1:{"name":"motheo","surname":"mars","age":26},
person_2:{"name":"motheo","surname":"mars","age":26}
}
function question_2(obj,targeted_key){

let total = 0;
for (const key in obj) {
    if (typeof obj[key]=== "object" && obj[key]!==null){
        total+=question_2(obj[key],targeted_key)
    }
    else if(key===targeted_key && typeof obj[key]==='number'){
        total+= obj[key];
    }
    
    return total
    
    }


}
console.log(question_2(users,'age'))