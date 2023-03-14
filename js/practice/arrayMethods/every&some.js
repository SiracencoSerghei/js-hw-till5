// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true
