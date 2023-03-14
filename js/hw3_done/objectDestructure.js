// // THEORY

// Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const accessType = book.public ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
// Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. Это делает код в месте их использования менее «шумным».

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// Деструктуризация всегда находится в левой части операции присвоения. Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. Порядок объявления переменных в фигурных скобках не важен.

// TASK

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная meanTemperature
// Значение переменной meanTemperature это число 29
// Используется синтаксис деструктуризации объекта highTemperatures

// TASK DECISION
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
