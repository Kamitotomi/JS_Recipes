let numbers = [1, 2, 3]

let numbers2 = numbers.map(function (value) {
	// body...
	return value * value
});

console.log(numbers2);

let dogs = [
	'フレンチブルドッグ',
	'ヨークシャテリア',
	'ダックスフント',
	'ポメラニアン',
	'コーギー',
];

let short = dogs.filter(function (value) {
	// every（全合致でtrue）some（一個あればtrue）などのパターン
	// 8文字未満の要素だけを返す
	return (value.length < 8);
});

console.log(short);