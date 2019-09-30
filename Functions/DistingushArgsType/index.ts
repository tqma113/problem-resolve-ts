// work well with 
export type A = {
  (p?: string): object
}

export type B = {
  (p: string): object
}

export type C = {
  (): object
}

export type Args<F> = F extends ((...args: infer ARGS) => any) ? ARGS : never
export type Dist<
  Func extends (...args: any[]) => any
> = Args<Func> extends [any]
  ? boolean
  : Args<Func> extends []
    ? string
    : number

export type testC = Dist<A> // number
export type testD = Dist<B> // boolean
export type testE = Dist<C> // string