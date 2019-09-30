# esModuleInterop

TypeScript与Babel都允许用户导入CommonJS模块做为默认导入，但是仍然在导入的命名空间上提 供了每个属性（除非模块使用了 __esModule标记）。

通常，在TypeScript视角下的CommonJS（和AMD）模块，命名空间导入总是相当于CommonJS模块对 象的结构，一个默认导入仅相当于模块上一个名字叫做 default的成员

为了允许用户使用与Babel或Webpack一致的运行时行为，TypeScript提供了一个新的 --esModuleInterop标记，它用于输出旧模块格式。

我们强烈建议Node.js用户利用这个标记，当一个库的模块输出目标为commonjs时，例如express，它会导入一个可调用/可构造的模块。

Webpack用户也可以使用它；然而，你们代码应该将目标设置为 esnext且 moduleResolution 策略为 node。 使用 esnext模块和 --esModuleInterop等同于启用了 --allowSyntheticDefaultImports。
