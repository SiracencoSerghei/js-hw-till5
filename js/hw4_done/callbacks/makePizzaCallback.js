// THEORY

// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);
// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// TASK

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// Объявлена функция deliverPizza
// Объявлена функция makePizza
// Объявлена функция makeMessage
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
// Вызов makeMessage("Royal Grand", makePizza) возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// Вызов makeMessage("Ultracheese", deliverPizza) возвращает строку "Delivering Ultracheese pizza."

// TASK DECISION

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
