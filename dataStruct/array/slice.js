var a = [1, { name : 'Bob'}, 2]
var b = a.slice(0,2)
console.log(b) // [ 1, { name: 'Bob' } ]
a[1].name = 'Jack'
console.log(b) // [ 1, { name: 'Jack' } ]