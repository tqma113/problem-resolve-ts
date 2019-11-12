// interface
{
  interface Foo {
    a: number
  }

  interface Bar extends Foo {
    b: string
  }

  let foo: Foo = {
    a: 0
  }

  let bar: Bar = {
    a: 0,
    b: 's'
  }

  foo = bar
  bar = foo
  // Property 'b' is missing in type 'Foo' but required in type 'Bar'.ts(2741)
}
