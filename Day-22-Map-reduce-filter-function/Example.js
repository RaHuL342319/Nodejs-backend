const users = [
  { firstName: "Rahul", age: 25, lastName: "Kumar" },
  { firstName: "Rohan", age: 29, lastName: "Singh" },
  { firstName: "Ravi", age: 34, lastName: "Sharma" },
  { firstName: "Ankit", age: 29, lastName: "Kumar" },
  { firstName: "Arpit", age: 45, lastName: "Sinha" },
];

/* [
  'Rahul Kumar',
  'Rohan Singh',
  'Ravi Sharma',
  'Ankit Kumar',
  'Arpit Sinha'
]

*/
const fullNameArray = users.map((value) => {
  return value.firstName + " " + value.lastName;
});
console.log(fullNameArray);
/* 
Print all the firstName of users whose age is less than 29

[ 'Rahul', 'Rohan', 'Ankit' ]
*/
const firstname = users
  .filter((value) => value.age < 30)
  .map((value) => value.firstName);

const first = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);

console.log(firstname);
console.log(first);
/*
Output should be like : {25: 1, 29: 2, 34: 1, 45: 1 }
*/

const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);
