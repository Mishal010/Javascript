let myDate = new Date();
console.log(myDate); // current date and time
console.log(myDate.toString())// current date and time in string format
console.log(myDate.toDateString())// current date in string format
console.log(myDate.toTimeString())// current time in string format
console.log(myDate.toISOString())// current date and time in ISO format

let specificDate = new Date(2023,0,23); // month is 0-indexed
console.log(specificDate.toString());

let specificDateTime = new Date(2023,0,23,10,30,15);
console.log(specificDateTime.toLocaleString());

let myTimestamp = Date.now() // timestamp in milliseconds
console.log(myTimestamp.toLocaleString());