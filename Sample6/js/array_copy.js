let data = ['📖', '🐶', '🐈']

let copy = Array.from(data)

console.log(copy);
console.log(data === copy);

// 配列を順に処理 for each

let animalas = [
	{name: 'フレンチブルドッグ', type: '🐶'},
	{name: 'ヨークシャテリア', type: '🐶'},
	{name: '柴犬', type: '🐶'},
	{name: 'アメリカンショートヘア', type: '🐈'},
	{name: 'ポメラニアン', type: '🐶'},
];

animalas.forEach(function (value) {
	// body...
	console.log(value.name + ':' + value.type);
});