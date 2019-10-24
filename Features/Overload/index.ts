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