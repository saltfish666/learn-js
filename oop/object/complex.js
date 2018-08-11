var me = {
    birthyear: 2000,
    age: 88
}
Object.defineProperty(me, 'age', {
    get () {
        return 2018 - this.birthyear
    }
})

console.log( me.age) // 18
console.log( Object.getOwnPropertyDescriptor(me, 'age'))
/* { get: [Function: get],
    set: undefined,
    enumerable: true,
    configurable: true } */

me.age = 88
console.log( me.age) // 18

Object.defineProperty(me, 'age', {
    set (value) {
        this.birthyear = 2018 - value
    }
})
me.age = 88
console.log( me.birthyear)   // 1930 
console.log( Object.getOwnPropertyDescriptor(me, 'age'))
/* { get: [Function: get],
    set: [Function: set],
    enumerable: true,
    configurable: true } */

var p = {
    set name(value){
        console.log( 'you are setting name')
    }
}
console.log(p.name) // undefined

