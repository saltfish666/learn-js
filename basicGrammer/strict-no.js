foo = "hello "

var me = {
    name: 'fish'
}
Object.defineProperty(me, 'name', {
    writable: false,
    enumerable: false,
})
me.name = 'tiger' 
Object.preventExtensions(me)
me.age = 18
console.log(me.age)    // undefined
console.log(me.name)   // fish
delete me