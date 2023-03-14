// const person = {
//   name: "Maxim",
//   age: 25,
//   greet() {
//     console.log("Hello");
//   },
// };
// person.greet();
// person.sayHello(); // выдаст ошибку, у обьекта нет такого метода

// console.log(person.toString());
//выдает нам строку, так как обьект person прототип обьекта Object, у которого есть метод toString.

// console.log(person);

// const person = new Object({
//   name: "Maxim",
//   age: 25,
//   greet() {
//     console.log("Greet");
//   },
// });
// Object.prototype.sayHello = function () {
//   console.log("Hello!");
// };
// console.log(person.sayHello());

// const egor = {
//   name: "egor",
//   age: 25,
// };

// console.log(egor.sayHello()); //мы создали на 23 строке метод глобального обьекта sayHello. Интерпретатор пытался найти этот метод у нас в первом обьекте, после провала пошел искать глубже, и нашел. Это и есть прототипное наследование.

// const lena = Object.create(person);
// lena.name = "Elena";
// console.log("Lena", lena);
// console.log(person.isPrototypeOf(lena));
// console.log(lena.hasOwnProperty("name"));
// console.log(lena.hasOwnProperty("age"));
// console.log(Object.keys(lena));
// lena.sayHello();
// lena.greet();

// const objC = {
//   z: 4,
// };
// console.log("objC:", objC);

// const objB = Object.create(objC);
// objB.y = 1;
// console.log(`ObjB:`, objB);

// const objA = Object.create(objB);
// objA.x = 2;
// console.log(`ObjA:`, objA);

// console.log('objA.hasOwnProperty("y"): ', objA.hasOwnProperty("y"));
// console.log("X:", objA.x, "Y:", objA.y, "Z:", objA.z, "objA:", objA);

// const Test = function (value) {
//   // функция Car будет вызвана в контексте созданого обьекта, то есть myCar. THIS будет ссылаться на пустой созданный обьект, myCar.
//   //   console.log(this);
//   this.a = value;
//   //   console.log(Car);
//   //   console.log(this);
// }; // функции конструкторы всегда начинаются с заглавной буквы.

// //если функция вызывается через new - создается пустой обьект
// // const myTest = new Test(5);
// // console.log(myTest.hasOwnProperty("a"));
// // console.log(myTest.a);
// // console.log(myTest);
// // console.log(myCar); // оператор new делает ЭКЗЕМПЛЯР класса Car. В консоль выведется Car
// // console.log(myCar);

// function Car(options = {}) {
//   const { brand, model, price } = options;
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.turnOn = function () {
//     console.log(`${brand} ${model} завелся.`);
//   };
//   this.trunOff = function () {
//     console.log(`${brand} ${model} заглушился.`);
//   };
//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// }

// Car.prototype.sayHi = function () {
//   console.log("Car.Prototype.sayHI -> this", this);
//   console.log(`Hello ${this.brand} ${this.model}`);
// };

// const audiRX360 = new Car({
//   brand: "Audi",
//   model: "RX360",
//   price: "999",
// });
// // audiRX360.turnOn();
// // audiRX360.trunOff();
// // audiRX360.changePrice(888);
// // audiRX360.sayHi();
// // console.log(audiRX360);
// audiRX360.sayHi();

// const bmwX6 = new Car({
//   brand: "BMW",
//   model: "M5",
//   price: "90000",
// });

// const mercedesCLA45 = new Car({
//   brand: "Mercedes-Benz",
//   model: "CLA 45",
//   price: "100000",
// });
// // mercedesCLA45.turnOn();

function User({ email, password } = {}) {
  this.email = email;
  this.password = password;
}
User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const egor = new User({ email: "kekik@gmail.com", password: "egor1999" });
egor.changeEmail("kek@gmail.com");
// console.log(egor);

///итог///

//1. У каждого обьекта есть свойство __proto__
//2. В этом свойстве лежит ссылка на его прототип, то есть другой обьект
//3. При создании литерала обьекта, в свойство __proto__ записывается ссылка на function(name).prototype.
// 4. Функция конструктор это просто функция
// 5. Всю магию делает оператор new.
// 6. Если функция-конструктор была вызвана через оператор new создается пустой обьект в памяти.
// 7. Функция конструктор вызывается в контексте пустого обьекта, который создался при использовании new.
// 8. В свойство this.__proto__ записывается ссылка на Функция.prototype

// 9. Ссылка на обьект возвращается в место вызова new Функция()

// статические методы

User.logInfo = function (obj) {
  console.log(`User.logInfo -> obj`, obj);
};

// Статические методы - внутренние методы самой функции конструктора, недоступные экземплярам.
User.message = "Я статическое свойство, меня нету на экземплярах и прототипах";

User.logInfo(egor);
