var me = {
    name: 'lishuai',
    birthyear: 1996,
    get age(){
        return 2018 - this.birthyear
    }
}
console.log( me)
console.log( me.age)  //22
me.age = 33
console.log( me.age)  // 22

var me = {
    name: 'lishuai',
    birthyear: 1996,
    get age(){
        return 2018 - this.birthyear
    },
    set age(age){
        this.birthyear = 2018 - age
    }
}
me.age = 33
console.log( me.birthyear)  // 1985
for( let key in me) {
    console.log( key) // name birthyear age
}
console.log(Object.getOwnPropertyDescriptor(me, 'age'))
/* { 
    get: [Function: get age],
    set: [Function: set age],
    enumerable: true,
    configurable: true 
} */

Object.defineProperty(me, 'age', {
    enumerable: false,
})
for (let key in me) {
    console.log( key)  // 'birthday' and 'name'
}