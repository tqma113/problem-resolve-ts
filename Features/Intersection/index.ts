export type A = {
  a: string
} & {
  b: number
}

export type B = {
  a: string
}

// true
export type C = A extends B ? true : false
// false
export type D = B extends A ? true : false