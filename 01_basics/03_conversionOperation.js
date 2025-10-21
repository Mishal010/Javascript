let score = 33;
console.log(typeof score);
console.log(typeof(score));

let valueInString = String(score);
console.log(typeof valueInString)
console.log(valueInString)

// "33" => 33
// "33abc" => NaN
// true/false => 1/0
// null => 0
// undefined => NaN

// Convert to string:
// 33 => "33"
// null => "null"
// undefined => "undefined"

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0,null,undefined,"" => false
// "hello" => true

// **************** Operations *******************

let value = 3;
let negValue = -value;
console.log(negValue) // -3

console.log(2+2) // 4
console.log("2"+"2") // "22"
console.log("2"+2) // "22"
console.log(2+"2") // "22"

console.log(2-"2") // 0
console.log("4"-"2") // 2
console.log("4abc"-"2") // NaN

console.log(2*"3") // 6
console.log("6"/"2") // 3
console.log("6abc"/"2") // NaN
console.log("2"*true) // 2
console.log("2"*false) // 0
console.log(2+true) // 3
console.log(2+false) // 2
console.log(2+"true") // "2true"
console.log(2+"false") // "2false"
console.log(true+true) // 2
console.log(true+false) // 1
console.log(false+false) // 0
console.log(true-"1") // 0
console.log(false-"1") // -1
console.log(true*"5") // 5
console.log(false*"5") // 0
console.log(true/"5") // 0.2
console.log(false/"5") // 0

console.log(false/"0") // Infinity
console.log(true/"0") // Infinity
console.log(+"") // 0
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+true) // 1
console.log(+false) // 0
console.log(+"33") // 33
console.log(+"33abc") // NaN
console.log(typeof(+"33")) // number
console.log(typeof(+"33abc")) // number
console.log(+"-33") // -33
console.log(typeof(+"-33")) // number

console.log(2**3) // 2^3 = 8
console.log(9**0.5) // 3
console.log(27**(1/3)) // 3
console.log(16**true) // 16
console.log(16**false) // 1

// Pre and Post Increment/Decrement
let a = 10;
console.log(++a) // 11
console.log(a) // 11

let b = 10;
console.log(b++) // 10
console.log(b) // 11

let c = 10;
console.log(--c) // 9
console.log(c) // 9

let d = 10;
console.log(d--) // 10
console.log(d) // 9