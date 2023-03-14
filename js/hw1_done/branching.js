// // THEORY
// Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100
// Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500
// При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if. Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

// TASK

// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

// TASK DECISION

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}
