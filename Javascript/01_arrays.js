console.log(Array.isArray("Debnath"));

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("Debnath"));

/* ++++++++++++++++++++++++++++++++++++++++++ */

// Object.keys()
// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

const object1 = {
    a: "somestring",
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  console.log(Object.values(object1));
  // Expected output: Array ["a", "b", "c"]
  // Expected output: Array [ 'somestring', 42, false ]

/* ++++++++++++++++++++++++++++++++++++++++++ */

const myName = {
  name: "Debnath Mahapatra",
};

console.log(Array.from(Object.values(myName)));

console.log(String(myName.name));
console.log(Array.from(String(myName.name)));

/* ++++++++++++++++++++++++++++++++++++++++++ */

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3));

/* ++++++++++++++++++++++++++++++++++++++++++ */