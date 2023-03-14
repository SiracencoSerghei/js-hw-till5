const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}

const temp = [16, 24, 30, 40, 50, 60];
console.log(...temp);
console.log(Math.max(...temp));
console.log(Math.round(...temp));

const temps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const copyOfTemps = [10];
console.log(temps);
console.log(copyOfTemps);
console.log(temps === copyOfTemps);

const week = [4, 6, 8, 10];
const weekTwo = [7, 10, 9, 11];
const copyOfWeeks = [...week, ...weekTwo];
console.log(week);
console.log(weekTwo);
console.log(copyOfWeeks);
