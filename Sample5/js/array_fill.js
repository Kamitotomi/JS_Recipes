let data = ['ぱんだ', 'うさぎ', 'こあら', 'うし', 'うま', 'とり'];
let data2 = ['ぱんだ', 'うさぎ', 'こあら', 'うし', 'うま', 'とり', 'ねずみ', 'ねこ', 'いぬ', 'さる'];
let data3 = ['ぱんだ', 'うさぎ', 'こあら', 'うし', 'うま', 'とり', 'ねずみ', 'ねこ', 'いぬ', 'さる'];

// console.log(data.fill('-'));

// console.log(data2.fill('-', 2, 6));

// reverseで並べ替え

console.log(data.reverse());

// sortメソッドで並び替え
let numbers = [7, 38, 21];
// 辞書順
console.log(data.sort());
console.log(numbers.sort());

// 数値の小さい順に
// dataなら辞書順になった。コールバック関数についてはまだよくわからん。
console.log(numbers.sort(function (m, n) {
	return m - n
}));

// copyWithin 配列内の移動
let sounds = ['ド', 'レ', 'ミ', 'ファ', 'ソ'];
let sounds2 = ['ド', 'レ', 'ミ', 'ファ', 'ソ'];
let sounds3 = ['ド', 'レ', 'ミ', 'ファ', 'ソ'];
console.log(sounds.copyWithin(2, 1, 3));
console.log(sounds2.copyWithin(1, 2));
