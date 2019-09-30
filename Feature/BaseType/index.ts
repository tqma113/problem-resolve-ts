// string, number, boolean, enum, object
// array, tuple
// any, never, unknown, null, undefined

enum e {}

export type A = Array<string> extends object ? true : false // true
export type B = [string, string] extends object ? true : false // true
export type C = [string, string] extends Array<string> ? true : false // true
export type D = Array<string> extends [string, string] ? true : false // false

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
