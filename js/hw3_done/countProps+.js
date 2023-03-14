// // TASK

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

// TASK DECISION
function countProps(object) {
  // Change code below this line
  const propCount = Object.keys(object).length;

  return propCount;
  // Change code above this line
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
