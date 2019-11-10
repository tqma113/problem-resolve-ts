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

enum e {}

// null
export type AI = string extends null ? true : false // false
export type AJ = number extends null ? true : false // false
export type AK = boolean extends null ? true : false // false
export type AL = e extends null ? true : false // false
export type AM = object extends null ? true : false // false

export type AN = null extends string ? true : false // true
export type AO = null extends number ? true : false // true
export type AP = null extends boolean ? true : false // true
export type AQ = null extends e ? true : false // true
export type AR = null extends object ? true : false // true

// undefined
export type AS = string extends undefined ? true : false // false
export type AT = number extends undefined ? true : false // false
export type AU = boolean extends undefined ? true : false // false
export type AV = e extends undefined ? true : false // false
export type AW = object extends undefined ? true : false // false

export type AX = undefined extends string ? true : false // true
export type AY = undefined extends number ? true : false // true
export type AZ = undefined extends boolean ? true : false // true
export type BA = undefined extends e ? true : false // true
export type BB = undefined extends object ? true : false // true