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

//6. object:
// var a = {
//     name: 'John',
//     age: 20,
//     isMarried: false
// };
// console.log(a);

// NOTE: when you see below of these: That means we are talking about functions, arrays and objects:
// () = function (function is a block of code that performs a specific task)
// [] = array (array is a collection of elements)
// {} = object (object is a collection of key(property)-value pairs)


//Array of objects:
// var a = [
//     {name: 'John', age: 20, isMarried: false},
//     {name: 'Jane', age: 21, isMarried: true}
// ];
// console.log(a);

// //Accessing properties of object:
// console.log(a[0].name);

// //Accessing properties of array of objects:
// console.log(a[1].name);

// //Accessing properties of object inside array of objects:
// console.log(a[0].age);


// //7. array:
// var a = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(a);

// console.log(a[0]);

// console.log(a[1]);

// //adding element in array:
// a.push(90);
// console.log(a);

// //removing element from array:
// a.pop();
// console.log(a);

// //finding length of array:
// console.log(a.length);

// //sorting array:
// a.sort();
// console.log(a);

// //reversing array:
// a.reverse();
// console.log(a);

// //removing first element from array:
// a.shift();
// console.log(a);

// //adding element at the beginning of array:
// a.unshift(10);
// console.log(a);

// //slicing array:
// a.slice(2, 5);
// console.log(a);

// //adding element at specific position in array:
// a.splice(2, 0, 100);
// console.log(a);

// //joining elements of array:
// a.join('+');
// console.log(a);

// //splitting string into array:
// a.split('+');
// console.log(a);

// //checking if element is present in array:
// a.includes(100);
// console.log(a);

// //finding index of element in array:
// a.indexOf(100);
// console.log(a);

// //finding last index of element in array:
// a.lastIndexOf(100);
// console.log(a);

// //finding character at specific position in string:
// a.charAt(0);
// console.log(a);

// //finding character code at specific position in string:
// a.charCodeAt(0);
// console.log(a);

// //converting character code to string:
// String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100);
// console.log(a);

// //concatenating strings:
// a.concat('Hello');
// console.log(a);

// //repeating string:
// a.repeat(2);
// console.log(a);

// //trim string from start:
// a.trimStart();
// console.log(a);

// //trim string from end:
// a.trimEnd();
// console.log(a);

// //trim string:
// a.trim();
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


//Frontend ki javascript mein hume bahut sare functions milte hain jo backend mein nahi milte.
//Backend ki javascript mein hume bahut sare libraries milte hain jo frontend mein nahi milte.

//MERN Stack:
//MongoDB, Express, React, Node.js

//MEAN Stack:
//MongoDB, Express, Angular, Node.js

//MERN Stack Development:
//MongoDB, Express, React, Node.js

//MERN Stack Development is a full stack development framework that allows you to develop web applications using MongoDB, Express, React, and Node.js.

//Frontend ki javascript ko hum kehte hai DOM(Document Object Model):
//DOM is a programming interface that allows us to create, change, or remove elements from the document.

//Frontend mein hume bahut sare HTML elements milte hain jo DOM mein bhi milte hain.

//HTML is a markup language that defines the structure of a web page.
//CSS is a styling language that defines the style of a web page.
//JS is a scripting language that defines the behavior of a web page.

//What are the 4 pillars of DOM ?
//1. Selection of elements
//2. Event handling
//3. Manipulation/ Changing of HTML elements
//4. Manipulation/ Changing of CSS(Animation) elements
//5. Manipulation/ Changing of JavaScript elements

//NOTE: We will learn about all these in detail in upcoming classes.

//Selection of elements:
//We can select elements from the document using DOM.

//Selecting an element using querySelector:
//querySelector selects the first element that matches the specified CSS selector.

// var h1 = document.querySelector('h1');
// console.log(h1);

//NOTE: querySelector is used to select a single element from the document.

//Changing the style of an element:
//We can change the style of an element using DOM.
//Changing the style of an element using style attribute:
//We can change the style of an element using style attribute.

//change the color of h1 element:
// h1.style.color = 'red';

//change the background color of h1 element:
// h1.style.backgroundColor = 'yellow';

//change the font size of h1 element:
// h1.style.fontSize = '50px';

//change the font family of h1 element:
// h1.style.fontFamily = 'Arial';

//change the font weight of h1 element:
// h1.style.fontWeight = 'bold';

//change the innerHTML of h1 element:
// h1.innerHTML = 'Hello World';

//change the text content of h1 element:
// h1.textContent = 'Hello World';

//NOTE: innerHTML and textContent both are used to change the content of an element.
//innerHTML is used to change the content of an element including HTML tags.
//textContent is used to change the content of an element without including HTML tags.

//selection of elements using DOM:
//document.querySelector('h1');
//document.querySelectorAll('h1');

//selection of elements using getElementById:
// var h1 = document.getElementById('heading');
// console.log(h1);

//selection of elements using getElementsByClassName:
// var h1 = document.getElementsByClassName('heading');
// console.log(h1);

//selection of elements using getElementsByTagName:
// var h1 = document.getElementsByTagName('h1');
// console.log(h1);

//selection of an element using querySelector:
// var h1 = document.querySelector('#heading');
// console.log(h1);

//selection of elements using querySelectorAll:
// var h1 = document.querySelectorAll('#heading');
// console.log(h1);

//NOTE: querySelector and querySelectorAll both are used to select elements from the document.
//querySelector selects the first element that matches the specified CSS selector.
//querySelectorAll selects all elements that match the specified CSS selector and returns a static NodeList.


//What is Event Listener ?
//Event Listener is a function that listens for events and executes a callback function when the event occurs.

//Event Listener is used to handle user interactions with the web page.

//What is event ?
//Event is an action that occurs in the web page.

//What are the types of events in JavaScript ?
//1. Mouse Events
//2. Keyboard Events
//3. Form Events
//4. Window Events

//NOTE: We will learn about all these in detail in upcoming classes.

// var h1 = document.querySelector('h1');
// console.log(h1);

// h1.addEventListener('click', function() {
//     console.log('h1 clicked');
// })

// h1.addEventListener('click', function() {
//     console.log('Changed');
// })

// h1.addEventListener('mouseover', function() {
//     console.log('h1 mouseover');
// })

// h1.addEventListener('mouseout', function() {
//     console.log('h1 mouseout');
// })

// h1.addEventListener('mousemove', function() {
//     console.log('h1 mousemove');
// })

// h1.addEventListener('mousedown', function() {
//     console.log('h1 mousedown');
// })

// h1.addEventListener('mouseup', function() {
//     console.log('h1 mouseup');
// })

// h1.addEventListener('dblclick', function() {
//     console.log('h1 dblclick');
// })

// h1.addEventListener('contextmenu', function() {
//     console.log('h1 contextmenu');
// })

// h1.addEventListener('mouseenter', function() {
//     console.log('h1 mouseenter');
// })

// h1.addEventListener('mouseleave', function() {
//     console.log('h1 mouseleave');
// })

//Example: 1
// var h1 = document.querySelector('h1');

// h1.addEventListener('click', function() {
//     h1.innerHTML = 'Changed';
//     h1.style.color = 'red';
//     h1.style.backgroundColor = 'yellow';
// })

//Example: 2
// var h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function() {
//     h1.innerHTML = 'Mouse Entered';
//     h1.style.color = 'seagreen';
//     h1.style.backgroundColor = 'lightblue';
// });

//Example: 2
// var h1 = document.querySelector('h1');

// h1.addEventListener('mouseleave', function() {
//     h1.innerHTML = 'Mouse Left';
//     h1.style.color = 'black';
//     h1.style.backgroundColor = 'white';
// });

//Example: 3
// var h1 = document.querySelector('h1');

// h1.addEventListener('dblclick', function() {
//     h1.style.color = 'purple';
//     h1.style.backgroundColor = 'pink';
// })

//Example: 4
// var h1 = document.querySelector('h1');

// h1.addEventListener('click', function() {
//     console.log('clicked');
//     h1.style.color = 'purple';
//     h1.style.backgroundColor = 'pink';
// })

