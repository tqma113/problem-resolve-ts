function isString(input: any): input is string {
  return typeof input === 'string'
}

function isNumber(input: any): input is number {
  return typeof input === 'number'
}

function isBoolean(input: any): input is boolean {
  return typeof input === 'boolean'
}

function isObject(input: any): input is object {
  return Object.prototype.toString.call(input) === '[object Object]'
}

function isThenable(input: any): input is Promise<any> {
  return Object.prototype.toString.call(input) === '[object Promise]'
}

function isRegExp(input: any): input is RegExp {
  return Object.prototype.toString.call(input) === '[object RegExp]'
}
/*
function isArray(input: any): input is Array<any> {
  return true // It's wrong. It's the example to explain the keyword 'is'
}

let a = 1

if (isArray(a)) {
  a.concat()
}
*/