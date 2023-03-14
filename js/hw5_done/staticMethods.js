// THEORY

// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, которые могут быть как публичные так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того что значением будет метод.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

// TASK

// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// Объявлен класс Car
// У класса Car есть статический метод checkPrice(price)
// Вызов Car.checkPrice(36000) возвращает строку "Success! Price is within acceptable limits"
// Вызов Car.checkPrice(18000) возвращает строку "Success! Price is within acceptable limits"
// Вызов Car.checkPrice(64000) возвращает строку "Error! Price exceeds the maximum"
// Вызов Car.checkPrice(57000) возвращает строку "Error! Price exceeds the maximum"

// TASK DECISION

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
