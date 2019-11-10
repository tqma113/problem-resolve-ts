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