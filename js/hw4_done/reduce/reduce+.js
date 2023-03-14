// THEORY

// При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// TASK

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// Объявлена переменная players
// Значение переменной players это массив объектов игроков
// Объявлена переменная totalAveragePlaytimePerGame
// Значение переменной totalAveragePlaytimePerGame это число 1023
// Для перебора массива players используется метод reduce()

// TASK DECISION
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  const { playtime, gamesPlayed } = player;
  return acc + playtime / gamesPlayed;
}, 0);
console.log(totalAveragePlaytimePerGame);
