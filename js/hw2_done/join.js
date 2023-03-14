// // THEORY

// Метод массивов join(delimiter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'

// TASK

// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// Объявлена функция makeStringFromArray(array, delimiter)
// Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
// Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"
// Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

// TASK DECISION

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
  string = array.join(delimiter);

  // Change code above this line
  return string;
}
