console.log(2>1) // true
console.log(2<1) // false
console.log(2>=2) // true
console.log(2<=2) // true
console.log(2==2) // true
console.log(2=="2") // true
console.log(2!="2") // false
console.log(2==="2") // false
console.log(2!=="2") // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
console.log(null == undefined) // true
console.log(null === undefined) // false

// The reason is that an equality check == and comparisons <, >, <=, >= work differently.
// When comparing null with a number, JavaScript converts null to 0 for the comparisons <, >, <=, >=.
// But for equality ==, null is only equal to undefined and not to any other value.

console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined == 0) // false

// When comparing undefined with a number, JavaScript does not convert undefined to any value.
// Instead, all comparisons with undefined return false, except for equality == with null.
console.log("hello" > 1) // false
console.log("2" > 1) // true
console.log("01" == 1) // true

// In the first case, "hello" is converted to NaN, and any comparison with NaN returns false.
// In the second case, "2" is converted to the number 2, so the comparison 2 > 1 is true.
// In the third case, "01" is converted to the number 1, so the equality 1 == 1 is true.

console.log(true == 1) // true
console.log(false == 0) // true
console.log(true === 1) // false

// In equality checks ==, true is converted to 1 and false to 0.
// In strict equality checks ===, no conversion happens, so true is not equal to 1.

console.log(true > false) // true
console.log(true < false) // false

// In comparisons, true is converted to 1 and false to 0, so 1 > 0 is true and 1 < 0 is false.