type A = 'a' | 'b'

type B = 'a'

// false
type C = A extends B ? true : false
// true
type D = B extends A ? true : false