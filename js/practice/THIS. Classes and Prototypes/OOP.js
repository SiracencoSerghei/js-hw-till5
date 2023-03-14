// Procedural programming

//получим расчет заработной платы с помощью обычных переменных и функции
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);

//OOP

//получаем то же самое, только более сжатое и декларативное. можно использовать на разных обьектах вызвав всего одну строку
const egor = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(egor.getWage());

const elena = {
  baseSalary: 21000,
  overtime: 5,
  rate: 1,
};

const elenaGetWage = egor.getWage.bind(elena);
console.log(elenaGetWage());

//ООП - ПОДХОД К ПРОГРАММИРОВАНИЮ, который решает основную задачу - структуризация информации с точки зрения управляемости.
