/** 
 * Hoisting => moving all the variable DECLARATION and function definition to the top of the current scope, 
 * top of current function or top of current script
 * 
 * Variable declaration is hoisted not the variale initialization.
 * i.e. var a; => hoisted
 * var a = 10; NOT hoisted
 * 
 * function definition hoisting only occurs for function declarations, NOT function expressions

*/


// variable - hoisting

vh1 = 10; // initialization
console.log('vh1: ', vh1);
var vh1; // declaration
// => vh1:  10

// hoisting - due to declaration but value still undefined
console.log('vh2: ', vh2);
var vh2; // declaration
vh2 = 10; // initialization
// => vh2:  undefined

// NOT hoisting - since no declaration
console.log('vh3: ', vh3);
var vh3 = 20; // initialization
// => vh3:  undefined

// hoisting
vh4 = 10; // initialization
console.log('vh4: ', vh4);
let vh4; // declaration
// => ReferenceError: vh4 is not defined (line 30)



// function hoisting

// function declarations hoisted
definitionHoisted();
// => "Definition hoisted!"


// function expressions - NOT hoisted
definitionNotHoisted();
//  => ReferenceError: vh4 is not defined

function definitionHoisted() {
    console.log("Definition hoisted!");
}

var definitionNotHoisted = function () {
    console.log("Definition not hoisted!");
};