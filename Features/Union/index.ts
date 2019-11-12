// extends
{  
  type B = number

  type A = number | string

  // false
  type C = A extends B ? true : false
  // true
  type D = B extends A ? true : false
}

// interface
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo | Bar

  type A = Foo extends Baz ? true : false // true. Baz = Foo
  type B = Baz extends Foo ? true : false // false.
}

// function parameter interface intersection
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo | Bar

  type FooFunc = (a: Foo) => void

  type BarFunc = (a: Bar) => void

  type BazFunc = (a: Baz) => void

  type A = FooFunc extends BazFunc ? true : false // true
  type B = BazFunc extends FooFunc ? true : false // true
}

// function return interface intersection
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo | Bar

  type FooFunc = () => Foo

  type BarFunc = () => Bar

  type BazFunc = () => Baz

  type A = FooFunc extends BazFunc ? true : false // true
  type B = BazFunc extends FooFunc ? true : false // false
}

// assignment
// type union
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo | Bar

  let foo: Foo

  let bar: Bar

  let baz: Baz

  foo = bar
  bar = foo

  foo = baz
  bar = baz

  baz = foo
  baz = bar
  // Type 'Foo' is not assignable to type 'Bar'.
  // Property 'b' is missing in type 'Foo' but required in type 'Bar'.ts(2741)
}

// function parameter interface union
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo | Bar

  type FooFunc = (a: Foo) => void

  type BarFunc = (a: Bar) => void

  type BazFunc = (a: Baz) => void

  let foo: FooFunc
  let bar: BarFunc
  let baz: BazFunc

  foo = bar
  bar = foo

  foo = baz
  bar = baz

  baz = foo
  baz = bar
}

// function parameter base union
{
  type FooFunc = (a: string) => void

  type BarFunc = (a: number) => void

  type BazFunc = (a: string | number) => void

  let foo: FooFunc
  let bar: BarFunc
  let baz: BazFunc

  foo = bar
  bar = foo

  foo = baz
  bar = baz

  baz = foo
  baz = bar
}

// function return interface union
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo | Bar

  type FooFunc = () => Foo

  type BarFunc = () => Bar

  type BazFunc = () => Baz

  let foo: FooFunc
  let bar: BarFunc
  let baz: BazFunc

  foo = bar
  bar = foo

  foo = baz
  bar = baz

  baz = foo
  baz = bar
}