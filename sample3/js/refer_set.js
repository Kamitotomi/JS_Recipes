// 基本型と参照型
// 参照型は配列やオブジェクト、関数でアドレスが格納されるので同じものを入れてもfalse
// 参照型の場合、代入元の変更が代入先に影響を及ぼす。

let a = 1;
let b = 1;
alert(a == b);
// true

let m = ['赤', '黄', '青'];
let n = ['赤', '黄', '青'];
console.log(m == n);
// false

let data = [85, 625, 124, 830, 227];
let [x0, x1, x2, ...last] = data;

console.log(x0);

console.log(last);
// 「...」で分割しきれなかった残りの要素をまとめる

// 論理演算 左式がtrueである時点で全体の式はtrue右式は評価されない
// let x = 50;
// let y = 10;

// console.log(x === 100 && y === 10);

let name = '';
name = name || '遥'
console.log(name)

