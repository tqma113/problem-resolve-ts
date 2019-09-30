let a1: number = null       // error TS2322: Type 'null' is not assignable to type 'number'.
let a2: string = undefined  // error TS2322: Type 'undefined' is not assignable to type 'string'

export type A = {
  (p?: string): object
}

export type B = {
  (p: string): object
}

export type OptionalFirstArg = (a?: never) => unknown;

export type IsOpt<F> = F extends OptionalFirstArg ? true : false;

export type testA = IsOpt<A> // true
export type testB = IsOpt<B> // false