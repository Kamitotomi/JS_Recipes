// 配列内検索

let books = [
	{
		title: '死に至る病',
		price: 1240,
	},
	{
		title: '国家',
		price: 2100,
	},
	{
		title: '方法序説',
		price: 550,
	},
];

console.log(books.find(function(value){
	// findの場合、最初の一つだけ。全部出すならfilter
	return (value.price < 2000);
}));

// 配列を処理して一つの結果にまとめる

let data = [2, 4, 6, 8]
console.log(data.reduce(function (result, value) {
	// body...
	return result * value;
}));

