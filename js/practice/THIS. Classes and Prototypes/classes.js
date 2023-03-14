class User {
  //синтаксис обьявления метода класса

  // Необязательное объявление публичных свойств
  //   name;
  // Обязательное объявление приватных свойств
  #email;

  // Допустим, почта пользователя должна быть недоступна для прямого изменения из вне, то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инициализации в конструкторе - обязательно.

  constructor({ name, email }) {
    // конструктор это просто функция.
    this.name = name;
    this.#email = email;
    //инициализация свойств экземпляра
  }

  // конкретно в class будут обьявляться его методы, которые будут доступны экземплярам в их прототипах.

  //   getEmail() {
  //     return this.#email;
  //   }

  //   changeEmail(newEmail) {
  //     this.#email = newEmail;
  //   }

  // ГЕТТЕРЫ И СЕТТЕРЫ иммитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. ГЕТТЕРЫ И СЕТТЕРЫ всегда идут в паре и должны называться одинаково. Используются для примитивов. Изменить сложный тип или получить его данные с помощью ГЕТТЕРА ИЛИ СЕТТЕРА НЕ получится. Главное отличие ГЕТТЕРА и СЕТТЕРА от обращения к обычному свойству, заключается в том, что внутри можно ставить условия, и в принципе выполнять любые проверки, так как это по прежнему методы обьекта. Синтаксис вызова ГЕТТЕРА - object.email, СЕТТЕРА - object.email = ...
  get email() {
    // геттер используется для получения значения свойства
    return this.#email;
  }
  set email(newEmail) {
    if (
      newEmail === 0 ||
      newEmail === null ||
      newEmail === undefined ||
      newEmail === ""
    ) {
      console.log(
        `Ошибка, почта пользователя ${this.name} не может быть пустым значением`
      );
      return;
    }
    // сеттер используется для изменения значения свойства.
    this.#email = newEmail;
  }
}

// const egor = new User(); // при вызове new User создается обьект, который будет являться экземпляром класса User.
// console.log("egor", egor);

// const lena = new User(); // если придет пустой обьект, а свойства уже деструктуризированы, выдаст ошибку.

const maxim = new User({ name: "Maxim", email: "maxim999@gmail.com" });
maxim.email = "massimio229@gmail.com"; // равносильно maxim.ChangeEmail()
console.log("maxim", maxim);
// console.log(Object.keys(maxim)); // this внутри конструктора будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями. Свойства name и email будут собственными свойствами обьекта maxim, это подтверждает консоль лог на 17 строке.
// maxim.changeEmail("massimo999@gmail.com");
// console.log(maxim); // методы класса доступны в прототипе обьекта maxim, и не дублируются в каждый экземпляр.

// console.log("приватное свойство максима?", maxim.email); // демонстрация приватных свойств. В консоль выведется undefined.

class Permission {
  // Объявление и инициализация статического свойства
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
    USER: "user",
  };

  // Обьявление и инициализация статического метода

  static getClassInfo() {
    console.log(this);
  }
  //Обьявление приватных свойств
  #role;
  #email;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }
  set role(newRole) {
    this.#role = newRole;
  }
}
const egor = new Permission({ email: "egorka999@gmail.com", role: "user" });
egor.role = Permission.Roles.EDITOR;

console.log("egor", egor);

// console.log(Permission.Roles);
// console.log(Permission.getClassInfo());
