export type A = 'a' | 'b'

export type B = 'a'

// false
export type C = A extends B ? true : false
// true
export type D = B extends A ? true : false