# downlevelIteration

Provide full support for iterables in for..of, spread and destructuring when targeting ES5 or ES3.

之前迭代器只在编译目标为 ES6/ES2015 或者更新版本时可用. 此外, 设计迭代器协议的结构, 比如 for..of, 如果编译目标低于 ES6/ES2015, 则只能在操作数组时被支持.

TypeScript 2.3 在 ES3 和 ES5 为编译目标时由 --downlevelIteration 选项增加了完整的对生成器和迭代器协议的支持.

通过 --downlevelIteration 选项, 编译器会使用新的类型检查和输出行为, 尝试调用被迭代对象的\[Symbol.iterator]() 方法 (如果有), 或者在对象上创建一个语义上的数组迭代器.

注意这需要非数组的值有原生的 Symbol.iterator 或者 Symbol.iterator 的运行时模拟实现.

使用 --downlevelIteration 时, 在 ES5/ES3 中 for..of 语句, 数组解构, 数组中的元素展开, 函数调用, new 表达式在支持 Symbol.iterator 时可用, 但即便没有定义 Symbol.iterator, 它们在运行时或开发时都可以被使用到数组上.

> false
```
B
o
o
h
!

�
�
```

> true
```
B
o
o
h
!

👻
```

因为它包含正确的迭代协议实现：

+ 该__values辅助函数寻找一个[Symbol.iterator]方法，并调用它，如果它被发现。如果不是，它将在对象上创建一个合成数组迭代器。
+ for-loop 不会迭代每个代码单元，而是调用迭代器的next()方法，直到用尽为止，在这种情况下done为true。
+ 为实现根据ECMAScript规范迭代协议，try/ catch/ finally块是为了适当的错误处理生成。