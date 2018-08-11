# oop

## 原型链
Every object created by a constructor has an implicit reference (called the object’s prototype) to the value of its constructor’s "prototype" property. Furthermore, a prototype may have a non-null implicit reference to its prototype, and so on; this is called the prototype chain. When a reference is made to a property in an object, that reference is to the property of that name in the first object in the prototype chain that contains a property of that name. In other words, first the object mentioned directly is examined for such a property; if that object contains the named property, that is the property to which the reference refers; if that object does not contain the named property, the prototype for that object is examined next; and so on.

## 设计模式
- 基于accessor property的拦截器
- 基于原型链的动态属性

### 杂谈
这也算是JS与众不同的地方了。JS没有像其他语言一样，采取面对对象的设计方式，而是选择了基于原型的方式。一个JS的对象，他有由键值组成的，但他又不是简简单单的一个map。
它的值分为上面两种，有提供属性描述符，功能很强大。
但是做了这么多会不会影响性能？

