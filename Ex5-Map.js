// Ex5: Map (Higher Order Functions)
// Array of animals

var animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "small",
    weight: 10
  },
  {
    name: "lion",
    size: "medium",
    weight: 150
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  }
]

// Example of the old imperative way of iterating arrays
// var animal_names = []
//
// for(var i=0; i<animals.length; i++){
//   animal_names.push(animals[i].name);
// }

// Higher order functions advantage is that it abstracts away the control flow so that the programmer can
// focus on the heart of the computation rather than on the details of loops, branches, and control flow.


// Please give food to animals whose weight is above 100.
// Only change code below this line.

var animal_names = animals.map(function(animal) {
  return {
    name: animal.name,
    size: animal.size,
    weight: animal.weight+10
  }
});

console.log(animal_names);

// output:
//
// [ { name: 'cat', size: 'small', weight: 15 },
//   { name: 'dog', size: 'small', weight: 20 },
//   { name: 'lion', size: 'medium', weight: 160 },
//   { name: 'elephant', size: 'big', weight: 5010 } ]
