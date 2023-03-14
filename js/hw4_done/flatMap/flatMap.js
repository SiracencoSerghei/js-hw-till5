// THEORY

// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».

// массив.flatMap((element, index, array) => {
//   // Тело коллбек-функции
// });
// В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map(student => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().

// TASK

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная genres
// Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебора массива books используется метод flatMap()

// TASK DECISION

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap((book) => book.genres);
console.log(genres);
