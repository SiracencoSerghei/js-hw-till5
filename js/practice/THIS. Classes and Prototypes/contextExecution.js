const petya = {
  username: "petya",
  showName() {
    console.log(petya.username);
  },
};
petya.showName();

const bookShelf = {
  authors: ["Бернард Корнуэлл", "Роберт Шекли"],
  getAuthors() {
    return this.authors;
  },
  //   addAuthor(authorName) {
  //     return this.authors.push(authorName);
  //   },
  removeAuthor(authorName) {
    const authorIndex = this.authors.indexOf(authorName);
    return this.authors.splice(authorIndex, 1);
  },
  addAuthor(authorName) {
    return this.authors.includes(authorName)
      ? `errror`
      : this.authors.push(authorName);
  },
};
console.log(bookShelf.addAuthor("Роберт Шекл"));
console.table(bookShelf.authors);
