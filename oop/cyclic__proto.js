var a = {'a':11}
var b = {'b':22}

Object.setPrototypeOf(a, b)
Object.setPrototypeOf(b, a)