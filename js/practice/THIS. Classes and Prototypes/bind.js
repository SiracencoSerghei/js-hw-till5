// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }
// const netflix = {
//   service: "Netflix",
// };
// const netflixGreet = greet.bind(netflix);
// console.log(netflixGreet("Holy"));

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer));

function hello() {
  console.log("hello", this);
}
// console.log(hello());

const user = {
  name: "vladilen",
  age: 25,
  sayHello: hello.bind(window),
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
// const fnLenaLogInfo = user.logInfo.bind(lena);
// fnLenaLogInfo("frontend", "898-999-111");
//  ||
const fnLenaInfoLog = user.logInfo.bind(lena, "frontend", "898-999-111");
fnLenaInfoLog();
