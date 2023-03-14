const arr = [1, 2, 3, 4, -80, -90, -100, 10, 1000];
const filteredArray = arr.filter((element) => element > 2);
console.log(filteredArray);
console.log(arr);

const genres = [
  { name: "vadim", genres: ["rap", "hip-hop", "classic"] },
  { name: "sergey", genres: ["90", "classic"] },
  { name: "anna", genres: ["kpop", "classic", "90"] },
];
const allGenres = genres.flatMap((genre) => genre.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter(
  (uniqueGenre, index, array) => array.indexOf(uniqueGenre) === index
);
console.log(uniqueGenres);

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log("worst:", worst);
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log("average:", average);

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log("best:", best);
