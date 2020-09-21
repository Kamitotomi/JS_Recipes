// 関数を引数として渡す

function benchmark(proc) {
	// body...
	let start = new Date(); //開始時刻
	proc();
	let end = new Date(); //終了時刻
	return end.getTime() - start.getTime();
}

// 指定された匿名関数の処理時間を計測
console.log(
	benchmark(function () {
		// body...
		let x = 15;
		for (let i = 0; i < 10000000; i++) {
			x += i;
		}
	})
);

// 関数から複数の値を返す

function getSumAvarage(...values) {
	// body...
	let result = 0
	// 可変長引数の内容を順に足しこむ
	for (let value of values) {
		result += value;
	}
	return [result, result / values.length];
}

let [sum, avarage] = getSumAvarage(3, 4, 5, 6);
console.log(sum);
console.log(avarage);