// destructured -assignments.js
let [d, m, y] = [31, 12, 2018]; // d=31, m=12, y=2018

//swap
[m, y] = [y, m] // m=2018, y=12

let { fn: firstName, ln: lastName } = { fn: "Naveen", ln: "Kumar" }; // firstName="Naveen", lastName="Kumar"
let { fn, ln } = { fn: "Naveen", ln: "Kumar" }; // fn="Naveen", ln="Kumar"