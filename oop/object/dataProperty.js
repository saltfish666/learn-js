var me = {
    name: 'lishuai',
    birthday: new Date(1996, 10, 14)
}
console.log( me.birthday)

Object.defineProperty(me, 'name', {
    writable: false,
    enumerable: false,
})
me.name = 'li shi'
console.log( me.name)  // still 'lishuai'
console.log( Object.getOwnPropertyDescriptor(me, 'name'))
/* { 
    value: 'lishuai',
    writable: false,
    enumerable: false,
    configurable: true 
} */

for (let key in me) {
    console.log( key)  // only 'birthday'
}

Object.defineProperty(me, 'age', {
    value: 22,
    writable: false,
    enumerable: true,
    configurable: false
})
console.log( me.age)  // 22
for (let key in me) {
    console.log( key)  // 'birthday' and 'age'
}

/* 
Object.defineProperty(me, 'age', {
    writable: true,
    enumerable: false,
    configurable: false
})
TypeError: Cannot redefine property: age
*/

var p = {
    father: {
        name: "lee"
    }
}
console.log( Object.getOwnPropertyDescriptor(p, 'father'))
/* { value: { name: 'lee' },
  writable: true,
  enumerable: true,
  configurable: true } */