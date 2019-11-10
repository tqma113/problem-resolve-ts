interface Foo {
  type: 'foo'
  foo: string
}

interface Bar {
  type: 'bar'
  bar: number
}

function foo(val: Foo | Bar) {
  switch(val.type) {
    case 'foo':
      console.log(val.foo)
      break
    case 'bar':
      console.log(val.bar)
      break
    default:
      const exhaustiveCheck: never = val
      break
  }
}