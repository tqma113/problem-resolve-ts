function isString(test: any): test is string{
  return typeof test === "string";
}

function example(foo: any){
  // type of foo is any
  if(isString(foo)){
    // type of foo is string
      console.log("it is a string" + foo);
      console.log(foo.length); // string function
  }
  // type of foo is any
}
example("hello world");