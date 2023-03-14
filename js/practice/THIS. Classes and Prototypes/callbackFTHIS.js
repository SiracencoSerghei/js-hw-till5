const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  return `Обрабатываем заявку от ${callback()}.`;
}
console.log(makeMessage(customer.getFullName())); // получим ошибку. Обьяснение в файле про bind, call, apply
