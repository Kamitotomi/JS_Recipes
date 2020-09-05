// while と　do...while

// let i = 2

// while (i < 5) {
	// console.log('iは' + i );
	// i ++;
// }

// let i = 2;

// do {
	// console.log('iは' + i);
	// i ++;
// } while (i < 5);

// whileは前置判定　do...whileは後置判定で最低1回は処理

// 指定の回数だけ処理

for (let i = 2; i < 5; i++) {
	console.log('iは' + i);
}

// for...in命令

let obj = { name: 'ソメイヨシノ', type: '桜', price: '2500' };

for (let i in obj) {
	console.log(i + 'は、　' + obj[i]);
}

// 配列の内容列挙なら for...of

// let data = ['Js', 'Ruby', 'PHP'];

// for (let value of data) {
	// console.log(value);
// }

// 空文字を飛ばして表示。もし止めるならbreak;

// let data = ['軽量', 'こねる', 'まるめる', '', 'ガス抜き', '成形', '', '焼く'];

// for (let i = 0; i < data.length; i++) {
	// if (data[i] === '') {continue; }
	// console.log(data[i]);
// }

// 複数の階層をまとめてスキップする nest?

let data = [
['緑茶', 'コーヒー'],
['おにぎり', 'サンドウィッチ'],
['肉じゃが', '唐揚げ'],
['まんじゅう', 'ケーキ'],
];

nest:
for (let i = 0; i < data.length; i++) {
	for (let j = 0; j < data[i].length; j++) {
		if (data[i][j] === '唐揚げ') {break nest; }
		console.log(data[i][j]);
	}
	console.log('-----------------------------');
}

