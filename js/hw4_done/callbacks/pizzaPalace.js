// // THEORY

// Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Mango");
// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

// Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);
// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.

// TASK

// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."

// TASK DECISION

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSucces, onError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return onSucces(pizzaName);
      }
    }
    return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
