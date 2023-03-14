// THEORY

// Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

// TASK

// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива
// Объявлена переменная lastElementIndex
// Значение переменной lastElementIndex это число 3
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "banana"

// TASK DECISION

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
