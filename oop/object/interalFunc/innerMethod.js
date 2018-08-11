let person = {
    sex: 'male'
}

let p1 = Object.create(person)
console.log( Object.getPrototypeOf(p1) === person) // true

Object.setPrototypeOf(p1, null)
p1.name = 'li'
console.log( Object.getOwnPropertyNames(p1)) // ['name']
delete p1.name
console.log( Object.getOwnPropertyNames(p1)) // []
Object.preventExtensions(p1)
p1.age = 33
console.log(p1) // {}
console.log(Object.isExtensible(p1)) // false





