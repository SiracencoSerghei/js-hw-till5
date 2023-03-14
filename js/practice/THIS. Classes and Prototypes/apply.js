// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// // аналог методу call, единственное отличие - вторым аргументом и так далее принимает только массив.

// greetGuest.apply(mango, ["hello"]);
const user = {
  name: "vladilen",
  age: 25,
  logInfo(job, phone) {
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

user.logInfo.apply(lena, ["Frontend", "9999-18188-1882"]);
