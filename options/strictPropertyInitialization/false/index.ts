class A {
  name: string
  age = 10

  constructor(age: number) { // error TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor.
    this.age = age
  }
}