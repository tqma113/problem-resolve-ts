function test(a: boolean) { // Not all code paths return a value.ts(7030)
  if(a) {
    return a
  }
}
test(true)