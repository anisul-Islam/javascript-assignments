const users = [
  {
    id: 1,
    name: 'anisul islam',
    age: 32,
    country: 'Bangladesh',
  },
  {
    id: 2,
    name: 'robert william',
    age: 31,
    country: 'Denmark',
  },
  {
    id: 3,
    name: 'Miltion',
    age: 28,
    country: 'Sweden',
  },
  {
    id: 4,
    name: 'Rakib',
    age: 25,
    country: 'Sweden',
  },
  {
    id: 5,
    name: 'Ali',
    age: 32,
    country: 'Pakistan',
  },
];

// Program 1: create a function and print the user details whose age>=30 (use filter and map)
// THIS FUNCTION RETURNS NAMES ONLY
const name = users.map(users=>{
  return users.name
})
console.log(name)
// END HERE

// THIS FUNCTION RETURNE AGE THIRTY PLUS
const thirtiesplus = users.filter(users=>{
  return users.age>=30;
}).map(users =>{
  return users.name
})
console.log(thirtiesplus)
// END HERE