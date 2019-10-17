export type State = {
  a: string
  b: string
}
export type Action<S, RS> = (state: S) => RS

function foo<A extends Action<State, any>>(a: A) {
  
}

function foo1<A extends Action<any, State>>(a: A) {
  
}

function baz(state:{ a:string }) {
  
}

foo(baz)
// foo1(baz) 
// Argument of type '(state: { a: string; }) => void' is not assignable to parameter of type 'Action<any, State>'.
// Type 'void' is not assignable to type 'State'