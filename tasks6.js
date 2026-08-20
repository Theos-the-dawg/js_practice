

function question_1(array){
   const min  = Math.min(array)
   console.log(min)
}
//question_1((12,34,56,1))

function question_2(amount,coins){
    let result = [];
    
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            result.push(coins[i]);
        }
    }
    
    return result;
}


function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));