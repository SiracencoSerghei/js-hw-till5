// THEORY
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

// TASK

// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// Объявлена переменная books
// Значение переменной books это исходный массив объектов книг
// Объявлена переменная sortedByAuthorName
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке
// Объявлена переменная sortedByReversedAuthorName
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке
// Объявлена переменная sortedByAscendingRating
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
// Объявлена переменная sortedByDescentingRating
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
// Для перебора массива books используется метод sort()

// TASK DECISION

// Change code below this line

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);
console.log(sortedByAuthorName);
const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);
console.log(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
