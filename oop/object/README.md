# JS 中的对象

## JS中对象是什么？
An Object is logically a collection of properties.
不同于其他语言，这种范式像面对对象，像map，但又都不是，是一种崭新的设计哲学。

Each property is either a data property, or an accessor property
 - A data property associates a key value with an ECMAScript language value and a set of Boolean attributes.
 - An accessor property associates a key value with one or two accessor functions, and a set of Boolean attributes. The accessor functions are used to store or retrieve an ECMAScript language value that is associated with the property.
### key
必须是string（包括空字符串） 或 Symbol 
尝试其他类型都会被隐式转化为string

### accessor property
就是把静态的值扩从为动态的函数，没什么神秘的，就是提供了拦截器，方便了元编程

## Interal Methods
不可直接访问，可以用过Object. ... 来操作
- [[GetPrototypeOf]] ( )
- [[SetPrototypeOf]] (V)
- [[PreventExtensions]] ( )
- [[GetOwnProperty]] (P)
- [[DefineOwnProperty]] (P, Desc)
- [[HasProperty]] ( P )
- [[Get]] (P, Receiver)
- [[Set]] ( P, V, Receiver)
- [[Delete]] ( P )
- [[Enumerate]] ( )
- [[OwnPropertyKeys]] ( )
- [[OwnPropertyKeys]] ( )
- [[Construct]] ( )

## 如何创建对象
- literal notation
- constructors  
Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties. Objects are created by using constructors in new expressions; for example, new Date(2009,11) creates a new Date object. Invoking a constructor without using new has consequences that depend on the constructor. For example, Date() produces a string representation of the current date and time rather than an object.
- Object.create()