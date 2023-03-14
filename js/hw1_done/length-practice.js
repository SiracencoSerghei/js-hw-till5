// // THEORY

// Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.

// Индексация элементов строки начинается с нуля. Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.

// Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"
// Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

// TASK
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// Объявлена переменная courseTopic
// Значение переменной courseTopic это строка "JavaScript essentials"
// Объявлена переменная courseTopicLength
// Значение переменной courseTopicLength это число 21
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"

// TASK DECISION
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line
