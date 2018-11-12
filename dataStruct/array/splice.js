var a = [1, 2, 3, 4]
var b = a.splice(1)
console.log(a) // [ 1 ]
console.log(b) // [ 2, 3, 4 ]

var a = [1, 2, 3, 4]
var b = a.splice(1,2)
console.log(a) // [ 1, 4 ]
console.log(b) // [ 2, 3 ]

var a = [1, 2, 3, 4]
var b = a.splice(1,2,'hello')
console.log(a) // [ 1, 'hello', 4 ]
console.log(b) // [ 2, 3 ]