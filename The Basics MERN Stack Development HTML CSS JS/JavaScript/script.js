// //details about console:
// console.log('Hello World');
// console.log('Welcome to the world of JavaScript');

// console.warn('This is a warning');
// console.error('This is an error');

// //details about variables:

// // variables declaration: 
// var a;
// var b;
// var c;
// var d;
// var e;
// var f;
// var g;
// var h;

// // variables initialization:
// a = 10;
// b = 20;
// c = 30;
// d = 40;
// e = 50;
// f = 60;
// g = 70;
// h = 80;


// // variables declaration and initialization:
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var e = 50;
// var f = 60;
// var g = 70;
// var h = 80;

// //arithmetical operations:
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);

// var a = 10;
// var b = 20;
// var c = a - b;
// console.log(c);

// var a = 10;
// var b = 20;
// var c = a * b;
// console.log(c);

// var a = 10;
// var b = 20;
// var c = a / b;
// console.log(c);

// var a = 10;
// var b = 20;
// var c = a % b;
// console.log(c);

// var a = 10;
// var b = 20;
// var c = a ** b;
// console.log(c);

// alert('This is an alert message');
// confirm('You have confirmed the task.');
// prompt('Enter your name');

// alert('Hello World');

// alert (gives you alert)
// confirm (confirms your message)
// prompt (ask for a value)

// var ans = confirm('Do you want to continue?');
// console.log(ans);

// var name = prompt('Enter your name');
// console.log('User name is ' + name);

// //JS details about data types:

// -primitive data types:
// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt
//NaN

// -non-primitive data types:
// Object
// Array
// Function
// Date
// RegExp


// //1. string:
// var a = 'Hello';
// var b = 'World';
// var c = a + b;
// console.log(c);

// //2. number:
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);

// //3. boolean:
// var a = true;
// var b = false;

// //4. null:
// var a = null;

// //5. undefined:
// var a;
// console.log(a);

// //6. object:
// var a = {
//     name: 'John',
//     age: 20,
//     isMarried: false
// };
// console.log(a);

// //7. array:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(a);

// //8. function:
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));

// //9. date:
// var a = new Date();
// console.log(a);

// //10. regex:
// var a = /Hello/;
// console.log(a);

// //11. undefined:
// var a;
// console.log(a);

// //12. null:
// var a = null;
// console.log(a);


// //details about operators:

// //1. arithmetic operators:
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);

// //2. assignment operators:
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);

// //3. comparison operators:
// var a = 10;
// var b = 20;
// var c = a == b;
// console.log(c);

// //4. logical operators:
// var a = 10;
// var b = 20;
// var c = a && b;
// console.log(c);

// //5. bitwise operators:
// var a = 10;
// var b = 20;
// var c = a & b;
// console.log(c);

// //6. ternary operators:
// var a = 10;
// var b = 20;
// var c = a > b ? 'a is greater' : 'b is greater';
// console.log(c);

// //7. typeof operator:
// var a = 10;
// var b = 'Hello';
// var c = true;
// var d = null;
// var e;
// var f = {
//     name: 'John',
//     age: 20,
//     isMarried: false
// };
// var g = [10, 20, 30, 40, 50, 60, 70, 80];
// var h = function add(a, b) {
//     return a + b;
// }
// var i = new Date();
// var j = /Hello/;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);
// console.log(typeof i);

// //details about conditional statements:

// //1. if statement:
// var a = 10;
// var b = 20;
// if (a > b) {
//     console.log('a is greater');
// }

// //2. if-else statement:
// var a = 10;
// var b = 20;
// if (a > b) {
//     console.log('a is greater');
// } else {
//     console.log('b is greater');
// }

// //3. if-else-if statement:
// var a = 10;
// var b = 20;
// var c = 30;
// if (a > b) {
//     console.log('a is greater');
// } else if (b > c) {
//     console.log('b is greater');
// } else {
//     console.log('c is greater');
// }

// //4. switch statement:
// var a = 10;
// switch (a) {
//     case 10:
//         console.log('a is 10');
//         break;
//     case 20:
//         console.log('a is 20');
//         break;
//     default:
//         console.log('a is not 10 or 20');
// }

// //details about loops:

// //1. for loop:
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// //2. while loop:
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// //3. do-while loop:
// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// //4. for-in loop:
// var a = {
//     name: 'John',
//     age: 20,
//     isMarried: false
// };
// for (var i in a) {
//     console.log(a[i]);
// }

// //5. for-of loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// for (var i of a) {
//     console.log(i);
// }

// //6. forEach loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// a.forEach(function (i) {
//     console.log(i);
// });

// //7. map loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.map(function (i) {
//     return i * 2;
// });
// console.log(b);

// //8. filter loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.filter(function (i) {
//     return i > 50;
// });
// console.log(b);

// //9. reduce loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.reduce(function (i) {
//     return i;
// });
// console.log(b);

// //10. find loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.find(function (i) {
//     return i > 50;
// });
// console.log(b);

// //11. every loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.every(function (i) {
//     return i > 50;
// });
// console.log(b);

// //12. some loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.some(function (i) {
//     return i > 50;
// });
// console.log(b);

// //13. sort loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.sort(function (i) {
//     return i;
// });
// console.log(b);

// //14. reverse loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.reverse(function (i) {
//     return i;
// });
// console.log(b);

// //15. splice loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.splice(2, 0, 100);
// console.log(b);

// //16. slice loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.slice(2, 5);
// console.log(b);

// //17. join loop:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// var b = a.join('+');
// console.log(b);

// //18. split loop:
// var a = 'Hello World';
// var b = a.split(' ');
// console.log(b);

// //19. trim loop:
// var a = 'Hello World';
// var b = a.trim();
// console.log(b);

// //20. includes loop:
// var a = 'Hello World';
// var b = a.includes('Hello');
// console.log(b);

// //21. indexOf loop:
// var a = 'Hello World';
// var b = a.indexOf('World');
// console.log(b);

// //22. lastIndexOf loop:
// var a = 'Hello World';
// var b = a.lastIndexOf('World');
// console.log(b);

// //23. charAt loop:
// var a = 'Hello World';
// var b = a.charAt(0);
// console.log(b);

// //24. charCodeAt loop:
// var a = 'Hello World';
// var b = a.charCodeAt(0);
// console.log(b);

// //25. fromCharCode loop:
// var a = 'Hello World';
// var b = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100);
// console.log(b);

// //26. concat loop:
// var a = 'Hello';
// var b = 'World';
// var c = a.concat(b);
// console.log(c);

// //27. repeat loop:
// var a = 'Hello';
// var b = a.repeat(2);
// console.log(b);

// //28. trimStart loop:
// var a = 'Hello World';
// var b = a.trimStart();
// console.log(b);

// //29. trimEnd loop:
// var a = 'Hello World';
// var b = a.trimEnd();
// console.log(b);

// //30. trim loop:
// var a = 'Hello World';
// var b = a.trim();
// console.log(b);

// //31. trimLeft loop:
// var a = 'Hello World';
// var b = a.trimLeft();
// console.log(b);

// //32. trimRight loop:
// var a = 'Hello World';
// var b = a.trimRight();
// console.log(b);

// //33. padStart loop:
// var a = 'Hello World';
// var b = a.padStart(15, 'H');
// console.log(b);

// //34. padEnd loop:
// var a = 'Hello World';
// var b = a.padEnd(15, 'H');
// console.log(b);

// //35. pad loop:
// var a = 'Hello World';
// var b = a.pad(15, 'H');
// console.log(b);


