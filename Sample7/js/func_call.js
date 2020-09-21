// call apply

var name = 'Grobal'
let data1 = { name: 'Japan' };
let data2 = {name: 'US' };

function showName() {
	// body...
	console.log(this.name);
}

showName.call(null);
showName.call(data1);
showName.call(data2);

// 配列ライクなオブジェクトを配列に変換（ちょっと何言ってるかわからない）

function showArgs() {
	// body...
	var　args = Array.prototype.slice.call(arguments);
	return args.join('・');
}

console.log(showArgs('サラー', 'マネ', 'フィルミーノ'));

// ジェネレーター

function * range(start, end) {
	// body...
	for (let i = start; i < end; i++) {
		yield i;
	}
}

// 10 ~ 19の範囲の値を取得

for (let num of range(10, 20)) {
	console.log(num);
};

// ジェネレーターの仕組み（解説読んだけどよくわからんからまあこういうもんだと）

// function * mygen() {
	// body...
	// yield 'おはよう';
	// yield 'こんにちは';
	// yield 'おやすみ';
// }

// let itr = mygen();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// ジェネレーターから別のジェネレーターの値を

function * mygen() {
	// body...
	yield '春が来た';
	yield * subgen();
	yield '花が咲く';
}

function * subgen() {
	// body...
	yield '山に来た'
	yield '里に来た'
	yield '野にも来た'
}

for (let str of mygen()) {
	console.log(str);
}