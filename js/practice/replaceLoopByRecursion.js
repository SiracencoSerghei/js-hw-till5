//  function multiply(arr, n) {
//    let product = 1;
//    for (let i = 0; i < n; i++) {
//      product *= arr[i];
//    }
//    return product;
//  }

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < Math.min(n, arr.length); i++) {
//     product *= arr[i];
//   }
//   return product;
// // }
// const arr1 = [3, 4, 5];
// // console.log(multiply(arr1, 5));

// function multiplied(arr) {
//   const n = arr.length;
//   // если n меньше или равно 0, то возвращаем 1 (базовый случай)
//   if (n <= 0) {
//     console.log(`multiplied([], n =  ${n}) = 1`);
//     return 1;
//   } else {
//     // получаем произведение элементов массива arr до n-1-го элемента
//     // (это делается рекурсивным вызовом функции multiplied)
//     const product = multiplied(arr.slice(0, n - 1));
//     console.log(product);
//     // умножаем произведение на n-й элемент массива arr
//     const result = product * arr[n - 1];
//     console.log(`multiplied(${arr.slice(0, n)}, n = ${n}) = ${result}`);
//     return result;
//   }
// }

// const arr2 = [1, 2, 3, 4, 5];

// console.log(multiplied(arr2)); // выведет результат и все шаги рекурсии

// arr.slice(0, n - 1) - это метод массива slice(), который возвращает новый массив, содержащий элементы arr от индекса 0 (включительно) до индекса n - 1 (исключая).

// В нашем случае n равно длине массива arr, поэтому arr.slice(0, n - 1) вернет новый массив, содержащий все элементы arr, кроме последнего элемента. Затем мы умножаем этот новый массив на последний элемент и получаем произведение всех элементов.

// Например, если arr равен [2, 4, 6, 8], то arr.slice(0, n - 1) вернет [2, 4, 6], а произведение всех элементов массива arr будет равно 2 * 4 * 6 * 8 = 384.

// function multiplied(arr, n) {
//   const limit = Math.min(n, arr.length);
//   if (limit === 0) {
//     console.log(`multiplied([], limit = ${limit}, n=${n}) = 1`);
//     return 1;
//   }
//   const product = multiplied(arr.slice(0, limit - 1), limit - 1);
//   const result = product * arr[limit - 1];
//   console.log(
//     `multiplied(${JSON.stringify(
//       arr.slice(0, limit),
//     )}, limit = ${limit}, n=${n}) = ${result}`,
//   );
//   return result;
// }
// const arr2 = [1, 2, 3, 4, 5];
// console.log(multiplied(arr2, 6)); // expected output: 120
// ===========================================

function multiplied(arr, n) {
  const limit = Math.min(n, arr.length);
  console.log(`array = ${arr}, limit = ${limit}`);

  let result = 1;
  for (let i = 0; i < limit; i++) {
    result *= arr[i];
  }

  console.log(`result = ${result}, limit = ${limit}`);

  return result;
}

const arr1 = [1, 2, 3, 4, ];
console.log(multiplied(arr1, 6));

// ===========================================
// function multiplied(arr, n) {
//   const limit = Math.min(n, arr.length);
//   console.log(
//     `multiplied(${JSON.stringify(arr.slice(0, limit))}), limit = ${limit})`
//   );

//   // если limit меньше или равно 0, то возвращаем 1 (базовый случай)
//   if (limit <= 0) {
//     console.log("дошли до нуля");
//     console.log(`multiplied([], limit = ${limit})`);
//     return 1;
//   } else {
//     // получаем произведение элементов массива arr до limit-1-го элемента
//     // (это делается рекурсивным вызовом функции multiplied)
//     const product = multiplied(arr.slice(0, limit - 1), n);
//     // умножаем произведение на limit-й элемент массива arr
//     const result = product * arr[limit - 1];
//     console.log(
//       `multiplied(${JSON.stringify(
//         arr.slice(0, limit)
//       )}, limit = ${limit}) = ${result}`
//     );
//     return result;
//   }
// }

// const arr1 = [1, 2, 3, 4, 5];
// console.log(multiplied(arr1, 6));
