// function greetMessage(greeting) {
//   console.log(`${greeting}, ${this.username}`);
// }

// const egor = {
//   username: "Egor",
// };
// const nadya = {
//   username: "Nadya",
// };
// // первым аргументом всегда будет принимать обьект, вторыми и третьим и т.д будет принимать остальные аругменты. (подобие reduce, первым идет аккумулятор.)
// greetMessage.call(egor, "WELCOME");

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
user.logInfo("BackEnd", "999-111-222");
user.logInfo.call(lena, "frontend", "898-999-111");
