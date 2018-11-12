function foo1(){
    //"use strict"
    arguments = [1, 2] // SyntaxError: Unexpected eval or arguments in strict mode
}

function foo1( arg1, arg1) {
    // SyntaxError: Duplicate parameter name not allowed in this context
}