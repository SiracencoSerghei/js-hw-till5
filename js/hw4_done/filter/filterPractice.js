// // THEORY

// Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

// Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

// # Массив всех курсов
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Для элемента "mathematics" под индексом 0:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 0.
// Они равны, значит это уникальный элемент.
// Для элемента "mathematics" под индексом 3:

// indexOf() вернёт 0, потому что ищет первое совпадение.
// Значение параметра index будет 3.
// Они не равны, значит это повторяющийся - не уникальный элемент.

// // TASK

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная allGenres
// Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Объявлена переменная uniqueGenres
// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()

// //TASK DECISION
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (element, index, arr) => arr.indexOf(element) === index
);
console.log(allGenres);
console.log(uniqueGenres);
