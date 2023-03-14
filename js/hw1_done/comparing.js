// // THEORY
// Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

// TASK
// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// Объявлена функция isAdult(age)
// В выражении проверки используется оператор >=
// Вызов isAdult(20) возвращает true
// Вызов isAdult(14) возвращает false
// Вызов isAdult(8) возвращает false
// Вызов isAdult(37) возвращает true

// TASK DECISION
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}
