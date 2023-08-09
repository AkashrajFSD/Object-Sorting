let people = [
  { name: 'Alice', age: 21 },
  { name: 'Alice', age: 24 },
  { name: 'Max', age: 21 },
  { name: 'June', age: 23 },
  { name: 'July', age: 24 },
];

function groupBy(arr, field) {
  let grouped = {};
  
  arr.forEach(person => {
    const fieldValue = person[field];
    
    if (!grouped[fieldValue]) {
      grouped[fieldValue] = [];
    }
    
    grouped[fieldValue].push(person);
  });
  
  return grouped;
}

const sortedByAge = people.sort((a, b) => a.age - b.age);
const groupedByAge = groupBy(sortedByAge, 'age');
console.log(groupedByAge);
