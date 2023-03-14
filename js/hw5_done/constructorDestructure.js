// THEORY
// Класс может принимать большое количество входных данных для свойств будущего объекта. Если параметров много (больше 2-х), то обычно применяют паттерн «Объект параметров». Идея этого паттерна в том, чтобы передавать в качестве параметра один объект с логично именованными свойствами. Значения свойств такого объекта заменят набор аргументов.

// class User {
//   // Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// TASK

// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

// TASK DECISION
//code

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

//code refactor

class Car {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
