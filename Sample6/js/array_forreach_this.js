let animalas = [
	{name: 'フレンチブルドッグ', type: '🐶'},
	{name: 'ヨークシャテリア', type: '🐶'},
	{name: '柴犬', type: '🐶'},
	{name: 'アメリカンショートヘア', type: '🐈'},
	{name: 'ポメラニアン', type: '🐶'},
];

// 整列結果を格納するための配列
let result = [];

// forEachメソッドの第二引数にはコールバック関数配下でのthisが参照するオブジェクトを指定できる
animalas.forEach(function (value) {
	// body...
	this.push(value.name + ':' + value.type);
},result);

console.log(result);

// this指定はmap, filter, everyでも可能