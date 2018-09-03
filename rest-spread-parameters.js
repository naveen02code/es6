// rest parameters

function restParam(name, ...options) {
    console.log(name);
    console.log("rest parameters:=> ", options); //array [{ age: 23 }, { City: "Gurugram" } ,"Hello World"]
}

restParam("Naveen", { age: 23 }, { City: "Gurugram" }, "Hello World");


// spread parameters

let countries = ['India', 'Canada', 'US', 'China'];

console.log(countries); // ["India", "Canada", "US", "China"]
console.log(...countries); // India Canada US China

let num = [1, 2, 3, 4, 5];

let max = Math.max(...num); // 5
console.log(Math.max(...num)); //5