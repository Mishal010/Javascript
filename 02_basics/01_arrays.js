// Array

const myArray = [10, 20, 30, 40, 50];

// Accessing elements
console.log(myArray[0]); // 10
console.log(myArray[2]); // 30

// Modifying elements
myArray[1] = 25;
console.log(myArray); // [10, 25, 30, 40, 50]

// Adding elements
myArray.push(60);
console.log(myArray); // [10, 25, 30, 40, 50, 60]

// Removing elements
myArray.pop();
console.log(myArray); // [10, 25, 30, 40, 50]

// Length of the array
console.log(myArray.length); // 5

// Iterating over an array
myArray.forEach((item) => {
  console.log(item);
});
// Output:
// 10
// 25
// 30
// 40
// 50

// Finding an element
const foundItem = myArray.find((item) => item > 30);
console.log(foundItem); // 40

// Filtering elements
const filteredArray = myArray.filter((item) => item >= 30);
console.log(filteredArray); // [30, 40, 50]

// Mapping elements
const mappedArray = myArray.map((item) => item * 2);
console.log(mappedArray); // [20, 50, 60, 80, 100]

// Reducing elements
const sum = myArray.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum); // 155

const myArray2 = new Array(1,2,3,4,5);
console.log(myArray2); // [1, 2, 3, 4, 5]

// Adding multiple elements at the start
const newElement = [9,8,6];
myArray2.unshift(...newElement);
console.log(myArray2);// [9, 8, 6, 1, 2, 3, 4, 5]

// Removing first element
myArray2.shift();
console.log(myArray2);// [8, 6, 1, 2, 3, 4, 5]

// Finding index of an element
const index = myArray2.indexOf(3);
console.log(index); // 5

// Slicing an array
const slicedArray = myArray2.slice(2, 5);
console.log(slicedArray); // [1, 2, 3]

// Splicing an array
myArray2.splice(2, 2, 7, 8);
console.log(myArray2); // [8, 6, 7, 8, 3, 4, 5]

console.log(myArray.join(" "));// "10 25 30 40 50" string from array elements


const arr = [1,2,3,4,5,[6,7,8],9,[10,11],[12,[13,14]]];
const flatArr = arr.flat(2)// flattening array by 1 level
console.log(flatArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const name = "JavaScript";
const nameArray = Array.from(name); // creating array from string
console.log(nameArray); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
Array.isArray(myArray) ? console.log("It's an array") : console.log("Not an array"); // "It's an array"
console.log(Array.from({name:"ark"}));// []

let score1 = 10;
let score2 = 20;
let score3 = 30;
let scor


console.log(Array.of(score1,score2,score3).sort());
// [10, 20, 30]
