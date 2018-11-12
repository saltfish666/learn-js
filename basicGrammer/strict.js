"use strict"
// foo = "hello " // ReferenceError: foo is not defined

var me = {
    name: 'fish'
}
Object.defineProperty(me, 'name', {
    writable: false,
    enumerable: false,
})
// me.name = 'tiger' // Cannot assign to read only property 'name' of object 
Object.preventExtensions(me)
// me.age = 18 // Cannot add property age, object is not extensible

delete me // SyntaxError: Delete of an unqualified identifier in strict mode.