// ЗАДАЧА: ПРОВЕРКА СПАМА

// TASK
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam("Latest technology news") возвращает false
// Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
// Вызов функции checkForSpam("Get best sale offers now!") возвращает true
// Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
// Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
// Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
// Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true

// TASK DECISION
function checkForSpam(message) {
  let result;
  // Change code below this line
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  // Change code above this line
  console.log(result);
  return result;
}
checkForSpam("Get best sale offers now!");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");
checkForSpam("Amazing SalE, only tonight!");
