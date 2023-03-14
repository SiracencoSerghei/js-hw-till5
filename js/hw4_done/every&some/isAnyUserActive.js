// TASK

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// Объявлена функция isAnyUserActive(users)
// Для перебора параметра users используется метод some()
// Вызов функции с указанным массивом пользователей возвращает true
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// TASK DECISION
// Change code below this line
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive === true);
};
// Change code above this line
