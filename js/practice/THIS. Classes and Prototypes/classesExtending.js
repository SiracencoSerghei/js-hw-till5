//  Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого класса (родителя).
// class Child extends Parent {
//   // ...
// }
class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    //в конструкторе дочернего класса обязательно должен быть SUPER(ARGS) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего класса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.
    super(email);
    this.email = email;
    this.posts = posts;
  }
  addPost(postTopic) {
    // методы которые были обьявлены для дочернего класса будут доступны его экземплярам.
    this.posts.push(postTopic);
  }
}
// console.log(ContentEditor);

const editor = new ContentEditor({
  email: "blessededitor@gmail.com",
  posts: [],
});
// editor.email = "goodyeditor@gmail.com";
console.log(editor);
console.log(editor.email);
editor.addPost("Что такое фронтенд");
console.log(Object.getPrototypeOf(editor));

//Класс ContentEditor наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. Важно помнить что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.
