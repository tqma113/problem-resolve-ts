export as namespace test
export = test

declare function test(): void

declare namespace test {
  interface A {
    a: string
  }
}