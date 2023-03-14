// THEORY

// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего класса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// TASK

// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

// Объявлен класс Admin
// Класс Admin наследует от класса User
// У класса Admin есть публичное статическое свойство AccessLevel
// У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
// У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
// Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
// Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

// TASK DECISION
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
