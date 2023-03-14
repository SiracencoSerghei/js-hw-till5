const genres = [
  { name: "vadim", genres: ["hip hop", "rap", "classic"] },
  { name: "sergey", genres: ["classic", "90", "80"] },
  { name: "anna", genres: ["bts", "pop", "k-pop"] },
];

const genre = genres.map((genre) => genre.genres);
console.log(genre);
const genr = genres.flatMap((genre) => genre.genres);
console.log(genr);
const names = genres.map((person) => person.name);
console.log(names);
const flatNames = genres.map((person) => person.name);
console.log(flatNames);

// метод flatMap() аналогичен методу map, но единственное отличие - разглаживает массив на глубину, равную единице.
