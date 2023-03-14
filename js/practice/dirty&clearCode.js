// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]

const pureMiltiply = (array, value) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(value * element);
  });
  return newArray;
};
console.log(pureMiltiply(numbers, 3));
console.log(numbers);
// dirty code - код который изменяет входные данные. стараться не писать
// clear code - код который не изменяет входные данные. писать обязательно
