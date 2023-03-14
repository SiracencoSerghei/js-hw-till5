// THEORY

// «Нестрогие» операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих.

// // ❌ Плохо, выполняется приведение типов
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// Поэтому для проверки равенства или неравенства двух значений используются операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.

// // ✅ Хорошо, приведение типов не выполняется
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// TASK
// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Объявлена функция isValidPassword(password)
// В выражении проверки паролей использован оператор ===
// Вызов isValidPassword("mangodab3st") возвращает false
// Вызов isValidPassword("kiwirul3z") возвращает false
// Вызов isValidPassword("jqueryismyjam") возвращает true

// TASK DECISION
function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}
