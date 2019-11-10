function foo(a: number, b: number): number {
  return a + b
}

foo.call({}, 0)
foo.call({}, 0, 1)
foo.apply({}, [0])
foo.apply({}, [0, 1])
let fooBinded = foo.bind({}, 0)
fooBinded()
fooBinded(1)