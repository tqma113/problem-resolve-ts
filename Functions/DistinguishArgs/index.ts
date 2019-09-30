export type Distinguish<
  Func extends (...args: any[]) => any
> = Args<Func> extends [object, any]
  ? string
  : Args<Func> extends [object]
    ? number
    : boolean

export type Args<F> = F extends ((...args: infer ARGS) => any) ? ARGS : never

export type testA = Distinguish<(a: {}) => any> // number
export type testB = Distinguish<(a: {}, b: any) => any> // string
