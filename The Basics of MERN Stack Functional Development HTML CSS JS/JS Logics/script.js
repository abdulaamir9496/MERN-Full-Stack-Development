//TOPICS:

// forEach
// map
// filter
// destructuring
// spread operator
// rest operator
// reduce
// sort


//forEach

//forEach() method calls a function on each element of an array.

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names);
// Output: ["Alice", "Bob", "Charlie", "David", "Eve"]
names.forEach(function(name) {
    console.log(name);
    // Output:
    // Alice
    // Bob
    // Charlie
    // David
    // Eve
    });
    // Output: undefined
    //forEach() method does not return anything, so it returns undefined.
    console.log(names);
    // Output: ["Alice", "Bob", "Charlie", "David", "Eve"]
    //forEach() method does not change the original array.
    names.forEach((name, index) => {
        console.log(name, index);
        });
        // Output:
        // Alice 0

        


// const names = ["John", "Jane", "Jim", "Jill"];
// names.forEach((name) => {
//     console.log(name);
// });


// // Array of names
// const people = ["Alice", "Bob", "Charlie", "David", "Eve"];

// // Use the map method to create a new array with the names in uppercase
// const upperCaseNames = people.map((name) => {
//     return name.toUpperCase();
//     });
//     // Use the map method to create a new array with the names in uppercase
//     console.log(upperCaseNames);
//     // Use the filter method to create a new array with the names that start with 'A'
//     const namesStartingWithA = people.filter((name) => {
//         return name.startsWith('A');
//         });
//         console.log(namesStartingWithA);
//         // Destructuring
//         const person = {
//             name: "John",
//             age: 30,
//             occupation: "Developer"
//             };
//             // Destructuring
//             const { name, age } = person;
//             console.log(name, age);
//             // Spread operator
//             const numbers = [1, 2, 3, 4, 5];
//             const doubleNumbers = [...numbers, ...numbers];
//             console.log(doubleNumbers);
//             // Rest operator
//             function sum(...numbers) {
//                 return numbers.reduce((a, b) => a + b, 0);
//                 }
//                 console.log(sum(1, 2, 3, 4, 5));
//                 // Reduce
//                 const numbers1 = [1, 2, 3, 4, 5];
//                 const sum = numbers1.reduce((a, b) => a + b, 0);
//                 console.log(sum);
//                 // Sort
//                 const numbers2 = [5, 2, 8, 1, 9];
//                 numbers.sort((a, b) => a - b);
//                 console.log(numbers2);

