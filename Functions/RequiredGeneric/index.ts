export type NoInfer<T> = [T][T extends any ? 0 : never]
function get<T = void>(
  a: NoInfer<T> & (T extends void ? 'You have to pass in a generic' : {})
) {
  return a
}

// let foo = get({ a: 1 }) // Type 'number' is not assignable to type 'never'.
let foo = get<{ a: number }>({ a: 1 })

class Test<P = void> {
  constructor(
    data: NoInfer<P> & (P extends void ? 'You have to pass in a generic' : {}),
  ) {}
}

// new Test({ a: ' ' }) // Type 'number' is not assignable to type 'never'.
new Test<{ a: string }>({ a: ' ' }) // ok