// function fnA(parameter) {
//   const innerVariable = `значение внтуренней переменной функции fnA`;
//   function innerFunction() {
//     console.log(innerVariable);
//     console.log(parameter);
//     console.log(`функция внутри родительской функции fnA`);
//   }
//   return innerFunction;
// }

// const fnB = fnA(555);
// fnB();
// console.log(fnA(555));

// sheff

// function DishSheff(name, dish) {
//   console.log("лог DishSheff");
//   return `${name} готовит ${dish}`;
// }
// console.log(DishSheff("Henry", "Пицца"));

// function makeSheff(name) {
//   function makeDish(dish) {
//     console.log("лог вызова makesheff>makedish");
//     console.log(`${name} готовит ${dish}`);
//   }
//   return makeDish;
// }

// console.log(makeSheff("pasha"));
// const nikita = makeSheff("Никита");
// nikita("суп");

// // округлятор

// function rounder(places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// }

// const rounder1 = rounder(1);
// const rounder4 = rounder(4);
// console.log(rounder1(3.6), rounder4(3.12345678));

// private variables

// function myLibFactory() {
//   let value = 0;
//   function add(num) {
//     value += num;
//   }
//   function getValue() {
//     return value;
//   }
//   return {
//     add,
//     getValue,
//   };
// }
// const myLib = myLibFactory();
// console.log(myLib.add(10), myLib.getValue());
// console.dir(myLib);

//
// function salaryManagerFactory(employeeName, baseSalary) {
//   let salary = baseSalary;
//   return {
//     raise(amount) {
//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `текущая зарплата ${employeeName} - ${salary}`;
//     },
//   };
// }
// const salaryManager = salaryManagerFactory("John", 5000);
// salaryManager.lower(2000);
// console.log(salaryManager.current());

// Замыкания это по сути функция внутри другой функции
function createCalcFunction(n) {
  return function () {
    console.log(100 * n);
  };
}
createCalcFunction(42); // не получим ничего, так как эта функция будет возвращать другую функцию

const calc = createCalcFunction(42); // заносим результат выполнения функции в переменную.
console.log(calc); // ƒ () {
//   console.log(100 * n);
// } получаем результат выполнения функции createCalcFunction. Все параметры и переменные, обьявленные в главной функции будут доступны в замыкающей функции.

calc(); // когда мы вызываем функцию, которая была получена в результате другой функции,

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}
const addOne = createIncrementor(1);
const addTen = createIncrementor(10);
console.log(addOne(10));
console.log(addTen(90));

function urlGenerator(domain) {
  return function (url) {
    return `https://${url.toLowerCase().split(" ").join("-")}.${domain}`;
  };
}
const comUrl = urlGenerator("com");
const uaUrl = urlGenerator("ua");
