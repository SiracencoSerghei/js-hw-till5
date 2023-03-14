const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const sortedArr = [...arr].sort((a, b) => b - a);
console.log(arr);
console.log(sortedArr);

const names = [
  {
    name: "vadim",
    budget: 200,
  },
  {
    name: "sergey",
    budget: 300,
  },
];
const sortedBudgets = names.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedBudgets);
