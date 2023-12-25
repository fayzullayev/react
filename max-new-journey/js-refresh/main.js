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

const hobbies = ['Sports', 'Cooking', 'Reading'];

const [hobby1, hobby2, hobby3] = hobbies;

console.log(hobby1, hobby2, hobby3);
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

const user = {
  // name: 'Max',
  // age: 34,
};

function log({ name = 'Mirodil', age: yosh = 26 }) {
  console.log(name, yosh);
}

log(user);
