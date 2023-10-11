let a = {};
let b = {key:"b"};
let c = {key:"c"};

console.log(b);
console.log(c);

console.log({key:"b"}.toString());

a[b] = 123
console.log(a[b]);

a[c] = 456

console.log(a[b])