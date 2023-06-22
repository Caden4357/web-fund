// Global scope
var a = 1;
function foo() {
    // Local scope to foo
    // function scope
    var b = 2;
    console.log(a + b);
}
foo(); // 3
console.log(a); // 1
console.log(b); // ReferenceError: b is not defined