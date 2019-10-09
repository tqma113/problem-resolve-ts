export type Flatten<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

export type Foo = { a: number } & { b: string }
export type Bar = Flatten<Foo>
// type Bar = {
//   a: number;
//   b: string;
// }