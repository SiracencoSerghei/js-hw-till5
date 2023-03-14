// // THEORY

// Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя свойства как строка.

// Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя свойства заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).

// На место обращения будет возвращено значение свойства с таким именем.
// Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book["genres"];
// console.log(bookGenres); // ["historical prose", "adventure"]

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // "Bernard Cornwell"

// TASK

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная aptRating
// Значение переменной aptRating это 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это ["premium", "promoted", "top"]

// TASK DECISION

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line
