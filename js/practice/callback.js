function renameTtoU(dna) {
  let letters = dna.toUpperCase().split("");
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] === "T") {
      letters[i] = "U";
    }
  }
  // return array;
  return letters;
}
console.log(renameTtoU("tttt"));
// Колбэк-функция
// function greet(nam) {
//   console.log(`Добро пожаловать ${nam}.`);
// }

// // Функция высшего порядка
// function registerGuest(nam, callback) {
//   console.log(`Регистрируем гостя ${nam}.`);
//   callback(nam);
// }

// registerGuest("Манго", greet);

// function copyArrAndDoSmth(arr, callback) {
//   const output = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     output.push(callback(arr[i]));
//   }
//   return output;
// }
// function mult(num) {
//   return num * num;
// }
// function pl(num) {
//   return num + num;
// }
// function divideBy3(num) {
//   return num / 3;
// }

// console.log(copyArrAndDoSmth([3, 12, 15], divideBy3));

// function greet(papa) {
//   console.log(`hi, ${papa}`);
//   return;
// }
// function bye(name) {
//   console.log(`bye, ${name}`);
//   return;
// }

// function registerGuest(name, callback, instructions) {
//   console.log(`Registering Guest name ${name}`);
//   callback(name);
//   instructions(papa);
//   return;
// }

// console.log(registerGuest("Mango", bye, greet, "papa"));

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// // registerGuest("Манго", function greet(name) {
// //   console.log(`Добро пожаловать ${name}.`);
// // });
// registerGuest("John", function greet(name) {
//   console.log(`Hi, ${name}`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

function processCall(name, onAvailable, onNotAvailable) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(name);
    return;
  }

  onAvailable(name);
}

function onAvailable(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

processCall("Манго", onAvailable, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// function processCall(name, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random(1).toFixed(1);
//   console.log(isRecipientAvailable);

//   if (isRecipientAvailable > 0.5) {
//     onNotAvailable(name);
//     return;
//   }
//   onAvailable(name);
// }
// function takeCall(name) {
//   console.log(`Соеднияем с ${name}`);
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение`);
// }
// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограму`);
// }

// // console.log(processCall("Papa", takeCall, activateAnsweringMachine));
// console.log(processCall("Mama", takeCall, leaveHoloMessage));

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// function makePizza(pizzaName) {
//   return `ваша пицца ${pizzaName} готовится.`;
// }
// function deliverPizza(pizzaName) {
//   return `ваша пицца ${pizzaName} везется курьером.`;
// }

// function makeMessage(ggg, callback) {
//   return callback(ggg);
// }
// console.log(makeMessage("Vadimelli", deliverPizza));

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = this;
//     for (const pizza of pizzas) {
//       if (pizzaName === pizza) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(pizzaName);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// const makePizza = (pizzaName) => {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// };

// // Callback for onError
// const onOrderError = (error) => {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// };

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// Abstraction
// function repeatLog(n) {
//   for (let i = 0; i <= n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(6);

// function printValue(value) {
//   console.log(value);
// }

// function mult(value) {
//   console.log(" value mult: ", value * value);
// }

// function repeat(n, action) {
//   for (let i = 0; i <= n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(100, mult);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// function doMath(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// function sum(x, y) {
//   return x + y;
// }
// doMath(4, 5, sum);

// function greet(name) {
//   console.log(`hello ${name}`);
// }

// function greet2(recipient, callback) {
//   callback(recipient);
//   console.log(`registering ${recipient}`);
// }
// greet2("James", function (name) {
//   console.log(`hello ${name}`);
// });

// const buttonRef = document.querySelector(".js-button");
// buttonRef.addEventListener("click", function () {
//   console.log(`клик` + 1);
// });

// function getPosOnSuccess(position) {
//   console.log(position);
// }
// function getPosOnError(error) {
//   console.log(error);
// }
// window.navigator.geolocation.getCurrentPosition(getPosOnSuccess, getPosOnError);

// REPEATING AUTOANSWER

// function makeCall(recipient, onAvailable, onNotAvailable) {
//   const math = 3;
//   if (math === 3) {
//     return onAvailable(recipient);
//   }
//   return onNotAvailable(recipient);
// }
// function onLine(name) {
//   console.log(`соеднияем с ${name}`);
// }
// function notOnLine(name) {
//   console.log(`${name} не может ответить, оставьте сообщение после гудка`);
// }

// makeCall("Kevin", onLine, notOnLine);

// filter, 2-more callbacks in cicle

// function filter(array, callback) {
//   const filteredArray = [];
//   for (const el of array) {
//     const PASSED = callback(el);
//     console.log(el, PASSED);
//     if (PASSED) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// }

// function gt3(value) {
//   return value >= 3;
// }
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], gt3));
