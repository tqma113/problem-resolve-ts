export type Distinguish<
  Func extends (...args: any[]) => any
> = Args<Func> extends [object, any]
  ? 'TWO'
  : Args<Func> extends [object]
    ? "ONE"
    : "UNKNOWN"

export type Args<F> = F extends ((...args: infer ARGS) => any) ? ARGS : never

export type testA = Distinguish<(a: {}) => any> // "ONE"
export type testB = Distinguish<(a: {}, b: any) => any> // "TWO"
