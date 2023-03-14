// // TASK

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.addPotion это метод объекта
// После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// TASK DECISION
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    return this.potions.push(potionName);

    // Change code above this line
  },
};
