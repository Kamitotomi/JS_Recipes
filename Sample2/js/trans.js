// 文字列型/論理型への変換

console.log(typeof String(123));
console.log(typeof Boolean(-1));

// 数値を文字列に変換
console.log (typeof(15 + ''));
// 文字列から数値　-演算子がオペランドを必ず数値として処理
console.log(typeof('15' - 0));
// 論理型への変換 !演算子の利用で強制的に論理型へ
console.log(typeof(!!10000));