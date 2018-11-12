## strict
让一些不安全的操作抛出异常
https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/

https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
### variables
-  foo = "bar" use before declare
- attempt to change unwirteable property
- attempt to add property to unextensible obj

- Deleting a variable, a function, or an argument will result in an error

### function
- Attempting to overwrite the arguments object will result in an error

### with(){}

with(){} statements are dead when strict mode is enabled 