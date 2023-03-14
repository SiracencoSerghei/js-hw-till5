// THEORY

// В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать, используя более «плоский» синтаксис инструкции ветвления switch.

// Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;
// }
// Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение: - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

// Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение: по порядку, сверху вниз.

// Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.

// TASK
// "organization" - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// Объявлена функция getSubscriptionPrice(type)
// Вызов getSubscriptionPrice("professional") возвращает число 20
// Вызов getSubscriptionPrice("organization") возвращает число 50
// Вызов getSubscriptionPrice("starter") возвращает число 0

// TASK DECISION
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
