// THEORY

// Внутри функций можно использовать зарезервированное ключевое слово this. Во время исполнения функции, в this записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.

// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.

// TASK

// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// Метод checkPizza объекта pizzaPalace использует this.
// Метод order объекта pizzaPalace использует this
// Вызов pizzaPalace.order("Smoked") возвращает строку "Order accepted, preparing «Smoked» pizza"
// Вызов pizzaPalace.order("Four meats") возвращает строку "Order accepted, preparing «Four meats» pizza"
// Вызов pizzaPalace.order("Big Mike") возвращает строку "Sorry, there is no pizza named «Big Mike»"
// Вызов pizzaPalace.order("Viennese") возвращает строку "Sorry, there is no pizza named «Viennese»"

//TASK DECISION

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};
