let p = {
    a: 2
}
Object.preventExtensions(p)
delete p.a
p // {}
p.a = 3
p.b = 3 
p // {}
