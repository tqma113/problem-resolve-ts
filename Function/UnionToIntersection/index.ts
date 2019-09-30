export type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
    ? I
    : never

export type A = {
  a: string
} | {
  b: number
}

// {
//   a: string;
// } & {
//   b: number;
// }
export type B = UnionToIntersection<A>