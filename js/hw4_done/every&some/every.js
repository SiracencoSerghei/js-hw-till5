// THEORY

// Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// массив.every((element, index, array) => {
//   // Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если все элементы массива удовлетворяют условию.
// Возвращает false если хотя бы один элемент массива не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает false.
// // Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// При работе с массивом объектов проверяется значение какого-то их свойства.

// TASK

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная eachElementInFirstIsEven
// Значение переменной eachElementInFirstIsEven это буль true
// Объявлена переменная eachElementInFirstIsOdd
// Значение переменной eachElementInFirstIsOdd это буль false
// Объявлена переменная eachElementInSecondIsEven
// Значение переменной eachElementInSecondIsEven это буль false
// Объявлена переменная eachElementInSecondIsOdd
// Значение переменной eachElementInSecondIsOdd это буль true
// Объявлена переменная eachElementInThirdIsEven
// Значение переменной eachElementInThirdIsEven это буль false
// Объявлена переменная eachElementInThirdIsOdd
// Значение переменной eachElementInThirdIsOdd это буль false
// Для перебора массивов использован метод every()

// TASK DECISION
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(
  (element) => element % 2 === 0
);
const eachElementInFirstIsOdd = firstArray.every(
  (element) => element % 2 !== 0
);

const eachElementInSecondIsEven = secondArray.every(
  (element) => element % 2 === 0
);
const eachElementInSecondIsOdd = secondArray.every(
  (element) => element % 2 !== 0
);

const eachElementInThirdIsEven = thirdArray.every(
  (element) => element % 2 === 0
);
const eachElementInThirdIsOdd = thirdArray.every(
  (element) => element % 2 !== 0
);
