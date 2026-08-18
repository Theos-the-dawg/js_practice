
Question 1: Find Active Users

* **Task:** Write a function that takes an array of user objects. Each object has a `name` (string) and an `isActive` (boolean) property. Use a loop to check each object with an if/else statement. Return a new array containing only the names of users where `isActive` is true.
* **Example Input:** `[{name: "Alice", isActive: true}, {name: "Bob", isActive: false}, {name: "Charlie", isActive: true}]`
* **Expected Output:** `["Alice", "Charlie"]`

Question 2: Inventory Stock Counter

* **Task:** Given an array of product objects with `item` (string) and `quantity` (number) properties, write a loop to evaluate the stock level. Use if/else statements to count how many items are "In Stock" (quantity greater than 0) versus "Out of Stock" (quantity equal to 0). Return an object with the totals: `{ inStockCount: X, outOfStockCount: Y }`.
* **Example Input:** `[{item: "Pen", quantity: 5}, {item: "Notebook", quantity: 0}, {item: "Pencil", quantity: 2}]`


Question 3: – Calculate Shopping Cart Total with Discounts

**Task:**
You are given an array of "product" objects. Each product has a price and a category. Loop through the items to calculate the total price. However, apply a **10% discount** if the category is `"electronics"`.

```JavaScript
const cart = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Shirt", price: 30, category: "clothing" },
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Book", price: 20, category: "books" }
];

let total = 0;
```
