// THEORY

// Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// массив.some((element, index, array) => {
//   // Callback function body
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// Возвращает false если ни один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает true.
// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// TASK

// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
// Объявлена переменная firstArray
// Значение переменной firstArray это массив [26, 94, 36, 18]
// Объявлена переменная secondArray
// Значение переменной secondArray это массив [17, 61, 23]
// Объявлена переменная thirdArray
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
// Объявлена переменная anyElementInFirstIsEven
// Значение переменной anyElementInFirstIsEven это буль true
// Объявлена переменная anyElementInFirstIsOdd
// Значение переменной anyElementInFirstIsOdd это буль false
// Объявлена переменная anyElementInSecondIsEven
// Значение переменной anyElementInSecondIsEven это буль false
// Объявлена переменная anyElementInSecondIsOdd
// Значение переменной anyElementInSecondIsOdd это буль true
// Объявлена переменная anyElementInThirdIsEven
// Значение переменной anyElementInThirdIsEven это буль true
// Объявлена переменная anyElementInThirdIsOdd
// Значение переменной anyElementInThirdIsOdd это буль true
// Для перебора массивов использован метод some()

// TASK DECISION

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(
  (element) => element % 2 === 0
);
const anyElementInSecondIsOdd = secondArray.some(
  (element) => element % 2 !== 0
);

const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);
