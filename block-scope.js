function blockScopeDemo(){
    let name = 'let1';
    var age = 'var1';
    if(true){
        let name = 'let2'; // if name = 'let2' (notice, let keyword NOT there) will override outer name variable
        var age = 'var2';
        console.info('let: ', name);
        console.info('var: ', age);
    }
    console.info('let: ', name);
    console.info('var: ', age);
}

blockScopeDemo();
// output below: (code line no.)
// let:  let2    (block-scope.js:7)
// var:  var2    (block-scope.js:8)
// let:  let1    (block-scope.js:10)
// var:  var2    (block-scope.js:11)



//////////////////////////////////////////////////////////////////////////////////////////////
var i = 0;
for (var i = 0; i < 3; i++) {
    console.info('i: ', i);
}
console.log(i);

// i:  0 (block-scope.js:26)
// i:  1 (block-scope.js:26)
// i:  2 (block-scope.js:26)
// 3     (block-scope.js:28) => var - no block scope - var i - returns 3


var i = 0;
for (let i = 0; i < 3; i++) {
    console.info('i: ', i);
}
console.log(i);

// i:  0 (block-scope.js:38)
// i:  1 (block-scope.js:38)
// i:  2 (block-scope.js:38)
// 0     (block-scope.js:40) => let - block scope - var i = 0 remains the same
