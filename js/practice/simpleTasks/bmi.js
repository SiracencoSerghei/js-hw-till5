// function sumMix(x) {
//   let total = 0;
//   for (const value of x) {
//     total += Number(value);
//   }
//   return total;
// }
// console.log(sumMix([9, 3, "7", "3"]));

// function doubleInteger(i) {
//   // i will be an integer. Double it and return it.
//   const doubled = i * 2;
//   return doubled;
// }
// console.log(doubleInteger(2));

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0;
  for (const sheep of arrayOfSheep) {
    if (sheep === true) {
      total += 1;
    }
  }
  return `There are ${total} sheeps in total`;
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(array1));

function grow(x) {
  let total = 1;
  for (const n of x) {
    total *= n;
  }
  return total;
}
console.log(grow([1, 2, 3]));

function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

function positiveSum(arr) {
  let total = 0;
  for (const value of arr) {
    if (value > 0) {
      total += value;
    }
  }
  return total;
}

console.log(positiveSum([-1, 2, 3, 4, -5]));

function countPositivesSumNegatives(input) {
  // your code here
  let positiveTotal = 0;
  let negativeTotal = 0;
  let array = [];
  for (const value of input) {
    if (value > 0) {
      positiveTotal += 1;
    } else if (value < 0) {
      negativeTotal += value;
    }
  }
  array.push(positiveTotal);
  array.push(negativeTotal);
  return array;
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
// const propName = "henry";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола";
// console.log(user.henry); // 'Генри Сибола'

const propName = "gooo";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола",
};

console.log(user.gooo); // 'Генри Сибола'
