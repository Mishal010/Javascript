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


