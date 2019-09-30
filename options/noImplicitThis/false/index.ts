function test(a: boolean) {
  if(a) {
    return this.a // 'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
  }
}
test(true)