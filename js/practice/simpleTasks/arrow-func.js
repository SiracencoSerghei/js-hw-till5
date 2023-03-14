// function add(a, b, c) {
//   return a + b + c;
// }
// const add1 = (a, b, c) => {
//   return a + b + c;
// };
// console.log(add(1, 2, 3));
// console.log(add(2, 4, 7));
// // явный возврат
// const arrowFunc = () => {
//   console.log(
//     `стрелочная функция без параметров, обязательные пустые скобки, пример с явным возвратом`
//   ); // явный возврат функции, присутствует тело {}
// };

// arrowFunc();

// const arrowFunc2 = (a, b) =>
//   `стрелочная функция без параметров с неявным возвратом`;

// console.log(arrowFunc2());

// function fnA() {
//   return { a: 5 };
// }

// // const arrowFnA = () => {a:5,}//вернет ошибку, интерпретатор воспринимает это как тело функции.

// const arrowFnA = () => ({ a: 5 }); //записываем литерал обьекта в круглые скобки, чтобы не открыть тело функции

// console.log(fnA());
// console.log(arrowFnA());

// переписываем колбэки на стрелки

const filter = (array, callback) => {
  const filteredArray = [];
  for (const el of array) {
    const PASSED = callback(el);
    // console.log(el, PASSED);
    if (PASSED) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

// const gt3 = (value) => value >= 3;
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], gt3));

// const lt4 = (value) => value <= 4;
// console.log(filter([5, 6, 7, 8, 9], lt4));
console.log(filter([1, 2, 4, 5, 6, 7, 8, 9], (value) => value <= 4));

// function makeCall(recipient, onAvailable, onNotAvailable) {
//   const math = 3;
//   if (math === 3) {
//     return onAvailable(recipient);
//   }
//   return onNotAvailable(recipient);
// }
// function onLine(name) {
//   console.log(`соеднияем с ${name}`);
// }
// function notOnLine(name) {
//   console.log(`${name} не может ответить, оставьте сообщение после гудка`);
// }
