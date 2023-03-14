// THEORY

// Для работы со свойствами будущего экземпляра используются методы класса. Методы - это просто функции, но с одним отличием, они доступны экземпляру класса.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// TASK

// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// В классе Car объявлен метод getPrice
// Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
// В классе Car объявлен метод changePrice
// Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает

// TASK DECISION

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }

  // Change code above this line
}
