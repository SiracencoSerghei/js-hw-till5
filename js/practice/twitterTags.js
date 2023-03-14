const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// получить массив всех тегов
const allTags = tweets.flatMap((tweet) => tweet.tags);
const getTagStats = allTags.reduce((acc, tag) => {
  // if (acc[tag]) {
  //   acc[tag] += 1;
  //   return acc;
  // }
  // acc[tag] = 1;
  // return acc;
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log("tweets:", tweets);
console.log("allTags:", allTags);
console.log("tagStats", getTagStats);
