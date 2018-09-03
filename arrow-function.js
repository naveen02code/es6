/** NOTE
 * lexical this binding: the value of this variable inside the arrow function is determined by 
   where the arrow-function is defined but NOT where it is used.

 * Cannot used as constructor function
 * Cannot change value of this inside the function.
 * No binding of this
     
 * 
 */


// normal function
function greet(name) {
    console.log('Hello! ' + name);
}
greet('Jack');
// => Hello! Jack

// es6 arrow-function
const newGreet = (name) => {
    console.log('Hello! ' + name);
}
newGreet('Jenny');
// => Hello! Jenny

// this binding

function Book(name, author) {

    this.name = name;
    this.author = author;

    this.getDetail = () => {
        return this.name + this.author;
    }

    this.getSummary1 = function() {
        setTimeout(() => {
            console.info("this===>", this); // this refers to Book function
            this.age = 21; // writes on this of Book function
            console.info(this.name + this.author);
        }, 0)
    }

    this.getSummary2 = function() {
        setTimeout(function() {
            console.info("this2===>", this); // this refers to timeout function
            this.age = 21; //doesnot write on this of Book function
            console.info(this.name + this.author);
        }, 0)
    }
}

let book = new Book('Introduction to Algorithm', 'Cormen');

console.info(book.getDetail());
// => Introduction to AlgorithmCormen


book.getSummary1(); // Note: All good! this binds to
// => Introduction to AlgorithmCormen

book.getSummary2(); // Note: "this" variable is binded to setImmediate fun since it is defined inside that
//  => NaN