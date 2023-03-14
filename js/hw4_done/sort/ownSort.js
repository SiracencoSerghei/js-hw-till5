// THEORY
// Для указания своего порядка сортировки методу sort(compareFunction) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((a, b) => {
//   // Callback function body
// });
// a - первый элемент для сравнения.
// b - второй элемент для сравнения.
// Если вызов compareFunction(a, b) возвращает любое отрицательное значение, то есть a меньше b, сортировка поставит a перед b. Это сортировка по возрастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Если вызов compareFunction(a, b) возвращает любое положительное значение больше нуля, то есть b больше a, сортировка поставит b перед a. Это сортировка по убыванию.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Eсли вызов compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.
// TASK

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная descendingReleaseDates
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Использован метод sort()

// TASK DECISION

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
console.log(descendingReleaseDates);
