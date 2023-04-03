// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upVote() {
//         this.votesQty += 1
//     }
//     downVote() {
//         this.votesQty -= 1
//     }
// }

// const firstComment = new Comment('First comment');

// console.log(firstComment);
// console.log(firstComment instanceof Comment);
// console.log(firstComment instanceof Object);

// firstComment.upVote();
// console.log(firstComment);
// console.log(firstComment.votesQty);

// firstComment.downVote();
// console.log(firstComment);
// console.log(firstComment.votesQty);

// console.log(firstComment.hasOwnProperty('text'));
// console.log(firstComment.hasOwnProperty('upVote'));

// console.log(Comment.prototype === firstComment.__proto__);

// ===========================================

// class Comment {
//   constructor(text) {
//     this.text = text;
//     this.votesQty = 0;
//   }
//   upVote() {
//     this.votesQty += 1;
//   }
//   downVote() {
//     this.votesQty -= 1;
//   }
//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }
// console.log(Comment);
// console.dir(Comment.prototype);

// const myComment = new Comment('awesome comment');
// console.log(myComment);
// console.dir(myComment.prototype);

// =========================================

// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el,acc) => acc += el, 0)
//     }
// }

// const myArray = new NumbersArray(2, 5, 7);

// console.log('myArray', myArray);
// console.log(myArray.sum());

// console.log(NumbersArray.prototype === myArray.__proto__);
// console.log(NumbersArray.prototype === myArray.__proto__);

// ==========================================


// const myName = 'Bogdan';
// console.log(myName.toUpperCase());

// const mySecondName = new String('Stashchuk');
// console.log(mySecondName); // Object

// ==============================================