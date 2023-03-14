// THEORY

// Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

// <условие> ? <выражение если условие истинно> : <выражение если условие ложно>
// Работает по такой схеме:

// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
// Если условие ложно, то есть приводится к false, вычисляется выражение после :.
// Значение вычисленного выражения возвращается как результат работы тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"
// Выполним рефакторинг, заменив if...else тернарным оператором.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"
// Внимание
// Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

// TASK
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

// TASK DECISION

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}
