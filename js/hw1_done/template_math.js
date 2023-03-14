// TASK
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 6
// Объявлена переменная pricePerDroid
// Значение переменной pricePerDroid это число 800
// Объявлена переменная deliveryFee
// Значение переменной deliveryFee это число 50
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 4850
// Объявлена переменная message
// Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

// TASK DECISION

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
