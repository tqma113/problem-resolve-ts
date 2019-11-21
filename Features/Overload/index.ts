export type Callback = () => void

function obj2str(
  obi: object
): string
function obj2str(
  obj: object,
  isToString: boolean
): string
function obj2str(
  obj: object,
  callback: () => void
): string
function obj2str(
  obj: object,
  isToString: boolean,
  callback: Callback
): string
function obj2str(
  obj: object,
  isToString?: boolean | Callback,
  callback?: () => void
): string {
  if (typeof isToString === 'function') {
    callback = isToString
    isToString = undefined
  }

  let str: string
  if (isToString) {
    str = obj.toString()
  } else {
    str = JSON.stringify(obj)
  }

  if (callback) {
    callback()
  }

  return str
}

let foo = {
  a: 'foo'
}
let objStr: string

objStr = obj2str(foo)
console.log('1', objStr)

objStr = obj2str(foo, true)
console.log('2', objStr)

objStr = obj2str(foo, () => {
  console.log('3', objStr)
})

objStr = obj2str(foo, true, () => {
  console.log('4', objStr)
})

// function foo1(a: string, b: string): string
// function foo1(a: number, b: number): number
// function foo1(a: string | number, b: string | number): string | number {
//     return a + b
// }

// let a = foo1('a', 'b') // 'ab': string
// let b = foo1(0, 1)     // 1: number
// let c = foo1('a', 1)   // error: No overload matches this call.

// interface Foo {
//   (a: string, b: string): string
//   (a: number, b: number): number
// }

// type Bar = Foo

// let foo1: Bar = (a, b) => {
//   return a + b
// }

// let a = foo1('a', 'b') // 'ab': string
// let b = foo1(0, 1)     // 1: number
// let c = foo1('a', 1)   // error: No overload matches this call.