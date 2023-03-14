// THEORY

// Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

// TASK

// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная titles
// Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебора массива books используется метод map() как чистая функция

// TASK DECISION

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

const titles = books.map((book) => book.title);
console.log(titles);

const ratingX10 = books.map((book) => {});
