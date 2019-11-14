// union
{
  type Foo = { // [Foo]
    a: string
  }
  type Bar = { // [Foo]
    b: number
  }
  type Baz = Foo | Bar // [Foo, Bar]

  type A = Foo extends Baz ? true : false
  type B = Baz extends Foo ? true : false

  // A extends B is true A can assign to B: B = A is right
}
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

// Intersection
{
  type Foo = { // [Foo]
    a: string
  }
  type Bar = { // [Foo]
    b: number
  }
  type Baz = Foo & Bar // [Foo & Bar]

  type A = Foo extends Baz ? true : false
  type B = Baz extends Foo ? true : false

  // A extends B is true A can assign to B
}

// extends
{
  type A = {
    a: string
  } & {
    b: number
  }
  
  type B = {
    a: string
  }
  
  // true
  type C = A extends B ? true : false
  // false
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

  type Baz = Foo & Bar

  type A = Foo extends Baz ? true : false // false.
  type B = Baz extends Foo ? true : false // true. Foo = Baz
}

// function parameter interface intersection
{
  type Foo = {
    a: number
  }

  type Bar = {
    b: string
  }

  type Baz = Foo & Bar

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

  type Baz = Foo & Bar

  type FooFunc = () => Foo

  type BarFunc = () => Bar

  type BazFunc = () => Baz

  type A = FooFunc extends BazFunc ? true : false // false
  type B = BazFunc extends FooFunc ? true : false // true
}

// conditional type
{
  type F<T> = T extends unknown ? (t: T) => void : never
  type F1<T> = T | boolean extends unknown ? (t: T) => void : never

  type A = F<number | string>
  // type A = ((t: string) => void) | ((t: number) => void)

  type B = F1<number | string>
  // type B = (t: string | number) => void
}

{
  type F<T> = T extends ((t: infer P) => void) ? P : never

  type A = F<(t: string) => void>
  // type A = string

  type B = F<((t: string) => void) | ((t: number) => void)>
  // type B = 
}

export type State = {
  a: string
  b: string
}
export type Action<S, RS> = (state: S) => RS

function foo<A extends Action<State, any>>(a: A) {
  
}

function bar<A extends Action<any, State>>(a: A) {
  
}

function baz(state:{ a:string }) {
  
}

foo(baz)
// bar(baz) 
// Argument of type '(state: { a: string; }) => void' is not assignable to parameter of type 'Action<any, State>'.
// Type 'void' is not assignable to type 'State'