let a1: number = null
let a2: string = undefined

export type A = {
  (p?: string): object
}

export type B = {
  (p: string): object
}

export type OptionalFirstArg = (a?: never) => unknown;

export type IsOpt<F> = F extends OptionalFirstArg ? true : false;

export type testA = IsOpt<A> // true
export type testB = IsOpt<B> // true because strictNullChecks is false

export type testC = string | undefined extends string ? true : false // true because strictNullChecks is false
export type testD = string extends string | undefined ? true : false // true
