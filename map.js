  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Map method iterates over an array or object, calls the callback function on every element and returns a new array containing all teh results of that process
// A callback function is a function that we pass as a parameter to the methd which will be called on every element of the array the method is operating on

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);


// Using map()
// The map method expects you to pass it a function which will be called on each element of the nums array (this is deliberately overcomplicated to demonstrate how it works)
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2 });
console.log(simplified);



// Simplfied w/ map() + arrow function
//Only takes one parameter, the number to be multiplied by 2, so it doesn't need brackets around num here
const arrow = nums.map(num => num * 2);
console.log(arrow);



// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentsWithIds = students.map(student => [student.name, student.id, student.profession, student.skill]);
console.log(studentsWithIds);