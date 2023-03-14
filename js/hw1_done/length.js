// THEORY

// Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

// const productName = "Repair droid";

// // Если в переменной хранится строка
// console.log(productName.length); // 12

// // Если строковый литерал
// console.log("Repair droid".length); // 12

// TASK
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// Объявлена функция getNameLength(name)
// Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters

// TASK DECISION
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
