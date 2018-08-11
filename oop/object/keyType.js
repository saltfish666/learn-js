var a = {
    name: 'aaa',
    toString(){
        return 'hi'
    }
}
var obj = {}
obj[a] = 2
console.log( obj) // { hi: 2 }

var b = {
    name: 'bbb',
    toString(){
        return 'hi'
    }
}
obj[b] = 'bbb'
console.log( obj) // { hi: 'bbb' }