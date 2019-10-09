let foo = {
  a: 'foo',
  b: 0
}

export type Foo = typeof foo
// type Foo = {
//   a: string;
//   b: number;
// }

let bar = {
  a: 'bar',
  b: 1
} as const

export type Bar = typeof bar
// type Bar = {
//   readonly a: "bar";
//   readonly b: 1;
// }