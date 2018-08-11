#基本语法

## this
### 为什么要用this
参考c++ java中的类方法，不使用this而是想python
一样显示的传入self，会让代码臃肿

更重要的是，this是动态绑定的，更加灵活而且有些
地方必须用this，比如原型链上的方法。

### 判断
全局环境下 this 是null 或者 global

在函数体内比较复杂
- new 调用是 this 指向新创建的对象
- apply call 可以强制绑定
- 隐式绑定： 那个对象找到这个函数的地址，this就跟谁
- 默认绑定，全局的this或全局环境下执行的函数的this  指向 全局对象
