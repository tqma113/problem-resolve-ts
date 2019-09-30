interface Animal {
  name: string
}

interface Dog extends Animal {
  w: string
}

interface Cat extends Animal {
  m: string
}

declare let f1: (x: Animal) => void;
declare let f2: (x: Dog) => void;
declare let f3: (x: Cat) => void;
f1 = f2;  // Error with --strictFunctionTypes
f2 = f1;  // Ok
f2 = f3;  // Error Type '(x: Cat) => void' is not assignable to type '(x: Dog) => void'. Types of parameters 'x' and 'x' are incompatible. Property 'm' is missing in type 'Dog' but required in type 'Cat'.ts(2322)

interface Comparer<T> {
  compare: (a: T, b: T) => number;
}

declare let animalComparer: Comparer<Animal>;
declare let dogComparer: Comparer<Dog>;

animalComparer = dogComparer;
dogComparer = animalComparer;