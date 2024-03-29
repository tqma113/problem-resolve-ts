export type A = {
  (p?: string): object
}

export type B = {
    (p: string): object
}

export type testA2 = A extends B ? true : false
export type testB2 = B extends A ? true : false

export type OptionalFirstArg = (a?: never) => unknown;

export type IsOpt<F> = F extends OptionalFirstArg ? true : false;

export type testA = IsOpt<A> // true
export type testB = IsOpt<B> // false

export type A1 = {
  a?: string
}

export type B1 = {
  a: string
}

export type testA1 = A1 extends B1 ? true : false
export type testB1 = B1 extends A1 ? true : false