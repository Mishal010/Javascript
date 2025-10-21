const accountNumber = 144553 // Immutable
let accountEmail = "amjad@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // Not good practice

console.log(accountNumber)
console.table([accountNumber,accountEmail,accountPassword,accountCity])

console.log(b); // This would result in a ReferenceError: Cannot access 'b' before initialization
let b = 10;
// console.log(b) program breaks as it encounters the error