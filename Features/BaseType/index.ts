// string, number, boolean, enum, object
// array, tuple
// any, never, unknown, null, undefined

enum e {}

export type A = Array<string> extends object ? true : false // true
export type B = [string, string] extends object ? true : false // true
export type C = [string, string] extends Array<string> ? true : false // true
export type D = Array<string> extends [string, string] ? true : false // false

// any
export type E = string extends any ? true : false // true
export type F = number extends any ? true : false // true
export type G = boolean extends any ? true : false // true
export type H = e extends any ? true : false // true
export type I = object extends any ? true : false // true

export type J = any extends string ? true : false // boolean
export type K = any extends number ? true : false // boolean
export type L = any extends boolean ? true : false // boolean
export type M = any extends e ? true : false // boolean
export type N = any extends object ? true : false // boolean

// unknown
export type O = string extends unknown ? true : false // true
export type P = number extends unknown ? true : false // true
export type Q = boolean extends unknown ? true : false // true
export type R = e extends unknown ? true : false // true
export type S = object extends unknown ? true : false // true

export type T = unknown extends string ? true : false // false
export type U = unknown extends number ? true : false // false
export type V = unknown extends boolean ? true : false // false
export type W = unknown extends e ? true : false // false
export type X = unknown extends object ? true : false // false

// never
export type Y = string extends never ? true : false // false
export type Z = number extends never ? true : false // false
export type AA = boolean extends never ? true : false // false
export type AB = e extends never ? true : false // false
export type AC = object extends never ? true : false // false

export type AD = never extends string ? true : false // true
export type AE = never extends number ? true : false // true
export type AF = never extends boolean ? true : false // true
export type AG = never extends e ? true : false // true
export type AH = never extends object ? true : false // true

// void
export type AI = string extends void ? true : false // false
export type AJ = number extends void ? true : false // false
export type AK = boolean extends void ? true : false // false
export type AL = e extends void ? true : false // false
export type AM = object extends void ? true : false // false

export type AN = void extends string ? true : false // true
export type AO = void extends number ? true : false // true
export type AP = void extends boolean ? true : false // true
export type AQ = void extends e ? true : false // true
export type AR = void extends object ? true : false // true

// never 是最具体的类型，因为没有哪个集合比空集合更小了；而 unknown 是最弱的类型，因为它包含了全部可能的值。any 则不为集合，它破坏了类型检查，因此请尽量不要使用 any！