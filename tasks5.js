// Question 1: Find Active Users

// * **Task:** Write a function that takes an array of user objects. Each object has a `name` (string) and an `isActive` (boolean) property. Use a loop to check each object with an if/else statement. Return a new array containing only the names of users where `isActive` is true.
// * **Example Input:** `[{name: "Alice", isActive: true}, {name: "Bob", isActive: false}, {name: "Charlie", isActive: true}]`
// * **Expected Output:** `["Alice", "Charlie"]`

const isActive=()=>{
const names = [
    {name: "Alice", isActive: true},
    {name: "Bob", isActive: false},
    {name: "Charlie", isActive: true}
]

// names.forEach(user => {
//     if(user.isActive === true){  
//     const array= []
//     array.push(user.name)
   
//     console.log(array)
//     }
// })

for(let i = 0;i<names.length;i++){
    const element = names[i]
    if(element.isActive ===true)
    console.log(element)
}
}
isActive()
//  Question 2: Inventory Stock Counter

// * **Task:** Given an array of product objects with `item` (string) and `quantity` (number) properties, write a loop to evaluate the stock level. Use if/else statements to count how many items are "In Stock" (quantity greater than 0) versus "Out of Stock" (quantity equal to 0). Return an object with the totals: `{ inStockCount: X, outOfStockCount: Y }`.
// * **Example Input:** `[{item: "Pen", quantity: 5}, {item: "Notebook", quantity: 0}, {item: "Pencil", quantity: 2}]`
//const products = [{item: "Pen", quantity: 5}, {item: "Notebook", quantity: 0}, {item: "Pencil", quantity: 2}]
function checkStock(products){
    let inStockCount = 0;
    let outOfStockCount = 0;

    for (const product of products) {
        if (product.quantity > 0) {
            inStockCount++;
        } else {
            outOfStockCount++;
        }
    }
    const values ={ inStockCount,
        outOfStockCount}
        console.log(values)
    return values;
   
}
//checkStock([{item: "Pen", quantity: 6}, {item: "Notebook", quantity: 0}, {item: "Pencil", quantity: 2}]);

const cart = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Shirt", price: 30, category: "clothing" },
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Book", price: 20, category: "books" }
];
function calculateTotal(products) {

    let total = 0;

    for (const product of products) {
        if (product.category === "electronics") {
            total += product.price * 0.90; // 10% discount
        } else {
            total += product.price;
        }
    }
    console.log(total)
    return total;
}
//calculateTotal(cart);