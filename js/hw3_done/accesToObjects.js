// Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// TASK

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// Объявлена переменная aptRating
// Значение переменной aptRating это число 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это строка "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это число 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

// TASK DECISION

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line
