const name = "Alice ";
const repoCount = 50;

// console.log(name+repoCount);

const gameName = "Zelda";

console.log(gameName[0]);
console.log(gameName.__proto__); // shows all methods available for string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes("Zel"));
console.log(gameName.startsWith("Zel"));
console.log(gameName.endsWith("a"));
console.log(gameName.indexOf("x"));// returns -1 if not found else returns index
console.log(gameName.replace("Zelda", "Mario"));
console.log(gameName.concat(" is a great game!"));
console.log(gameName.replaceAll("a", "o"));
console.log(gameName.repeat(3));
console.log(gameName.split("e"));
console.log(gameName.charAt(2));
console.log(gameName.substring(1,4));
console.log(gameName.slice(1,4));// supports negative indexing too
console.log(gameName.trim());// removes whitespace from start and end
// Strings are immutable i.e cannot be changed
let str = "Hello";
// str[0] = "h"; // this will not work
str = "h" + str.slice(1); // this will work
console.log(str);

// Template Literals (Template Strings)

const userName = "Bob";
const items = 3;
const price = 50;               
const bill = `Hello ${userName}
You have ${items} items in your cart
Your total is $${items * price}
Thank you!`;

console.log(bill);