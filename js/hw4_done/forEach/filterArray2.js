// TASK

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Объявлена переменная filterArray
// Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
// Для перебора массива numbers использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// TASK DECISION

// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
};
console.log(filterArray([12, 24, 8, 41, 76], 20));
