// Primitive

// 7 types: Call by value
// Number
// String
// Boolean
// BigInt
// null(empty)
// undefined(declared but not initialized)
// symbol(To make anything unique)

// Reference(Non primitive)

// Objects
// Array
// Function
// Regex
// Date

// Dynamically typed as type of variabes are decided at runtime.

// Symbols Example

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);