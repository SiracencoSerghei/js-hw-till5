// TASK

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// TASK DECISION
function findLongestWord(string) {
  // Change code below this line
  const array = string.split(" ");
  let longestWord = array[0];
  let longestWordLength = array[0].length;
  for (let i = 1; i < array.length; i += 1) {
    if (longestWordLength < array[i].length) {
      longestWordLength = array[i].length;
      longestWord = array[i];
    }
  }
  return longestWord;

  // Change code above this line
}

findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
