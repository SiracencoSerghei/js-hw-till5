// // THEORY
// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("droid")); // true
// console.log(productName.includes("Droid")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false

// TASK
// Функция checkForName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
// Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
// Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false

// TASK DECISION
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}
