// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     potions.forEach((potion) => {
//       if (potion.name === newPotion.name) {
//         return `Error! ${newPotion.name} is already in your inventory.`;
//       }
//     });
//     return potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     potions.forEach((potion, index) => {
//       if (potion.name === potionName) {
//         potions.splice(index, 1);
//       }
//     });
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i++) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//       }
//     }
//   },
// };

// // console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.removePotion("Dragon breath");
// console.table(atTheOldToad.getPotions());

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i++) {
      if (potions[i].name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i++) {
      const item = potions[i];
      if (potionName === item.name) {
        return potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i++) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
      }
    }
  },
};

console.table(atTheOldToad.getPotions());
