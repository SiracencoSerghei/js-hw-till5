// сделать такой же фокус как и с обычными функциями не получится. Стрелки не имеют своего this и всегда будут ссылаться на this родительской функции, если же ее нет, то выйдет undefined или window
const showThis = () => {
  console.log("this in showThis", this);
};
showThis();

const user = {
  name: "Mango",
};

user.showContext = showThis;
//получим то же самое значение что и на 5 строке.
user.showContext();
