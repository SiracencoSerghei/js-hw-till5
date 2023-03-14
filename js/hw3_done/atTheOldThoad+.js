// TASK

// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"]

// TASK DECISION
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  // Change code above this line
};
