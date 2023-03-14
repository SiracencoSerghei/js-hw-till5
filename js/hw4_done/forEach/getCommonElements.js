// TASK

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Объявлена функция getCommonElements(firstArray, secondArray)
// Для перебора параметра (массива) использован метод forEach
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// TASK DECISION

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
