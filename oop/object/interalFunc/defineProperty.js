let p = {
    a: 3
}

var res = Object.defineProperty(p, 'a', {
    configurable: false
})
/* Object.defineProperty(p, 'a', {
    enumerable:false
})
Cannot redefine property: a 
 */
Object.defineProperty(p, 'a', {
    writable: false
})
