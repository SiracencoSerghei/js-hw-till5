// const arr = ["country", "rock", "rap", "hip-hop"];
// const newArr = arr.map((element) => element.split(" "));
// console.log(newArr);

const players = [
  {
    id: "p",
    name: "sergey",
    budget: 1000,
    timePlayed: 238,
  },
  {
    id: "p2",
    name: "vadim",
    budget: 1000,
    timePlayed: 218,
  },
  { id: "p3", name: "anya", budget: 1000, timePlayed: 210 },
];

const playerIdToUpdate = "p3";

const timePlayedPlus = players.map((player) => {
  return {
    ...player,
    timePlayed: player.timePlayed ** 2,
  };
});
console.log(timePlayedPlus);

// const updatedPlayers = players.map((player) => {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       name: 123,
//     };
//   }
//   return {
//     ...player,
//   };
// });

const updatedPlayers = players.map((player) =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 1000 }
    : player
);
console.table(updatedPlayers);

// const player = players.map((player) => player.budget ** 2);
// console.log(player);
// const playerName = players.map(({ name }) => name);
// console.log(playerName);

//map - используется для трансформации массива, возвращает новый массив.
// const nums = [5, 10, 15, 90];
// const doubledNums = nums.map((element) => {
//   console.log(element);
// });
// console.log(nums);
// console.log(doubledNums);

const obj = {
  a: 1,
  b: {
    c: 3,
    z: 4,
  },
};

const {
  a,
  b: { c, z },
} = obj;

console.log(Object.values(z));
