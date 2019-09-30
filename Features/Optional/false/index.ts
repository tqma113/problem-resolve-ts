export type A = {
  (p?: string): object
}

export type B = {
  (p: string): object
}

export type C = {
  (): object
}

export type OptionalFirstArg = (a?: never) => unknown;

export type IsOpt<F> = F extends OptionalFirstArg ? true : false;

export type testA = IsOpt<A> // true
export type testB = IsOpt<B> // true because strictNullChecks is false
export type Args<F> = F extends ((...args: infer ARGS) => any) ? ARGS : never
export type Dist<
  Action extends (...args: any[]) => any
> = Args<Action> extends [any]
  ? boolean
  : Args<Action> extends []
    ? string
    : number

export type testC = Dist<A> // number
export type testD = Dist<B> // boolean
export type testE = Dist<C> // string

export type A1 = {
  a?: string
}

export type B1 = {
  a: string
}

export type testA1 = A1 extends B1 ? true : false
export type testB1 = B1 extends A1 ? true : false