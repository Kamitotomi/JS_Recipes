// 変数のデータ型の判定のメソッド

// Number.isNaNは、引数が数値でかつNaNであるときだけtrueを返す
console.log(Number.isNaN('xyz'));
console.log(isNaN('xyz'));

let data = new Date();

console.log(Number.parseInt(data))

// データ型を文字列で取得

let num = 100;
console.log(typeof num);

let str = 'はじめまして'
console.log(typeof str);

let obj = { a: 100, b: 200 };
console.log(typeof obj);