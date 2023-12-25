// function greet(firstName, lastName = 'Nabiyeva', ...args) {
//   console.log(firstName, lastName, 'args:', args.length);
// }
// const greet = (firstName, lastName = 'Nabiyeva', ...args) => {
//   console.log(firstName, lastName, 'args:', args.length);
// };
//
// greet('Mirodil', 'Fayzullayev', 1, 2, 3);
// greet('Iroda');
//
// console.log('Hello');

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log('Hi!');
//   }
// }
//
// const user1 = new User();
// user1.greet();
// const user = {
//   name: 'Mirodil',
//   age: 29,
//   greet(firstName, lastName = 'Nabiyeva', ...args) {
//     console.log(firstName, lastName, 'args:', args.length, this);
//   },
//   greet1: function () {
//     console.log(this);
//   },
// };
//
// console.log(user.name);
// console.log(user['age']);
// // user['greet'](1, 2, 3);
// user['greet1'](1, 2, 3);

// const hobbies = ['Sports', 'Cooking', 'Reading'];

// const [hobby1, hobby2, hobby3] = hobbies;

// console.log(hobby1, hobby2, hobby3);

// for (const i of [77, 88, 99]) {
//   console.log(i);
// }

//
// console.log(hobbies);
// // console.log(hobbies[0]);
//
// hobbies.push('Working');
// console.log(hobbies);
//
// const index = hobbies.findIndex((item) => item === 'Cooking');
//
// console.log(hobbies.map((item) => ({ text: item })));

// const user = {
//   name: 'Max',
//   age: 34,
// };
//
// function log({ name, age }) {
//   console.log(name, age);
// }
//
// log(user);

// const fn = () => {
//   console.log('Hello');
// };
//
// setTimeout(
//   (
//     () => () => () =>
//       fn
//   )(),
//   3000,
// );

// function greeter(num, fn) {
//   fn(num);
// }
//
// greeter(45, (nnn) => {
//   console.log(nnn);
// });

const hobbies = ['Sports', 'Cooking', 'Reading'];

console.log(hobbies);

hobbies.push('Qwerty');

console.log(hobbies);

const hb = hobbies;

hb[3] = 'yyyyy';

console.log(hb);
