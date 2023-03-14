// THEORY

// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство role - его роль, определяющую набор прав, например администратор, редактор, просто пользователь и т п. Возможные роли пользователей будем хранить как статическое свойство Roles - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// Статические свойства также могут быть приватные, то есть доступные только внутри класса. Для этого имя свойства должно начинаться с символа #, также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

// TASK

// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// Объявлен класс Car
// У класса Car есть статическое свойство MAX_PRICE
// Значение статического свойства MAX_PRICE это число 50000
// У экземпляра нет свойства MAX_PRICE
// В классе Car объявлен геттер price
// В классе Car объявлен сеттер price
// Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price
// Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price

// TASK DECISION

class Car {
  // Change code below this line
  #price;
  static MAX_PRICE = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
