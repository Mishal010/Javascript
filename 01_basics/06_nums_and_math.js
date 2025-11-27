let score = 40.789;
const balance = new Number(100.9876); // creates a Number object
console.log(balance);
console.log(score)
console.log(typeof score);
console.log(typeof balance);
console.log(score.toString().length)// converts number to string and then gets length
console.log(balance.toFixed(2));// shows number with 2 decimal places
console.log(score.toPrecision(3));// shows number with specified precision
console.log(Number.isInteger(score));// checks if number is integer
console.log(Number.isNaN(score));// checks if number is NaN
console.log(Number.parseFloat("40.789afs"));// parses a string and returns a floating point number
console.log(Number.parseInt("40.789afs"));// parses a string and returns an integer
console.log(Number.MAX_VALUE);// largest possible number in JS
console.log(Number.MIN_VALUE);// smallest possible number in JS
console.log(Number.MAX_SAFE_INTEGER);// largest safe integer in JS
console.log(Number.MIN_SAFE_INTEGER);// smallest safe integer in JS
console.log(Number.POSITIVE_INFINITY);// represents infinity
console.log(Number.NEGATIVE_INFINITY);// represents negative infinity

// Math Object
console.log(Math);
console.log(Math.PI);// returns value of PI
console.log(Math.abs(-4));// returns absolute value
console.log(Math.sqrt(16));// returns square root
console.log(Math.cbrt(27));// returns cube root
console.log(Math.pow(2, 3));// returns power
console.log(Math.round(4.78));// rounds to nearest integer
console.log(Math.ceil(4.2));// rounds up to nearest integer
console.log(Math.floor(4.6));// rounds down to nearest integer
console.log(Math.min(4,3,6,7));// returns minimum value
console.log(Math.max(4,3,6,7));// returns maximum value
console.log(Math.floor(Math.random()*(6))+1);// returns random integer between 1 and 6