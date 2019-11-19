{
  interface Foo {
    a: string
  }
  interface Bar extends Foo {
    b: number
  }
  let foo: Foo = {
    a: 'foo'
  }
  let bar: Bar = {
    a: 'bar',
    b: 0
  }
  bar = foo as Bar
}
{
let foo: string = 'foo'
let bar: number = 0

foo = bar as unknown as string
}
{
  let foo: string = 'foo'
  let bar: number = 0

  foo = bar as never as string
}