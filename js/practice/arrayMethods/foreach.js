// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (z, x) {
//   console.log(`z:${z}, x:${x}`);
// });
const people = [
  { name: "vadim", age: 18, budget: 19000 },
  { name: "sergey", age: 29, budget: 20000 },
];
people.forEach(function (person, z) {
  console.log(person);
  console.log(z);
  //   console.log(arr);
  if (z === 0) {
    console.log(`нашли вадима!`);
    // Object.keys(person);
  }
});

// const obj = [1, 2, 3, 5, 6];
// console.log(obj);
// console.log(obj.forEach((element) => element ** 2));

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
const makeCarsWithDiscount = (cars, discount) =>
  cars.map((car) => ({ ...car, price: car.price - car.price * discount }));

// console.table(makeCarsWithDiscount(cars, 0.2));
console.log(makeCarsWithDiscount(cars, 0.4));
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const upArr = arr.forEach((el) => el * 2);
// console.log(upArr);

const discountedCars = (cars, discount) => {
  return cars.flatMap((car) => ({
    ...car,
    price: car.price - car.price * discount,
  }));
};
console.table(discountedCars(cars, 10));
