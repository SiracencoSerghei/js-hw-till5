// // THEORY

// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// TASK
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// Объявлена функция getSubstring(string, length)
// Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
// Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
// Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
// Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
// Вызов функции getSubstring("Hello world", 0) возвращает ""

// TASK DECISION
function getSubstring(string, length) {
  const substring = string.slice(string, length); // Change this line

  return substring;
}
