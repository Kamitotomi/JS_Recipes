// シンボルの基本

let s = Symbol('hoge');
let s2 = Symbol('hoge');

console.log(typeof s);
console.log(s.toString());
console.log(s === s2);


console.log(typeof !!s);