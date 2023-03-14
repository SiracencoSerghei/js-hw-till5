// TASK

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// Объявлена переменная getUserNames
// Переменной getUserNames присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод map()
// Вызов функции с указанным массивом пользователей возвращает массив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// TASK DECISION
const getUserEmails = (users) => users.map((user) => user.email);
