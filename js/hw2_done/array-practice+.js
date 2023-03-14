// // THEORY

// В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];

// TASK
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// Объявлена переменная fruits
// Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]

// TASK DECISION

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";
