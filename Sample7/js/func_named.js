// function showPanel({
	// path = 'content.html',
	// height = 200,
	// width = 300,
	// reziable = true,
	// draggable = true,
	// modeless = false
// }) {
	// body...
	// console.log('path:' + path);
	// console.log('height:' + height);
	// console.log('width:' + width);
	// console.log('reziable:' + reziable);
	// console.log('draggable:' + draggable);
	// console.log('modeless:' + modeless);
// };

// 書籍オブジェクト(book)から値段だけを取り出す
function print({price}) {
	// body...
	console.log(price)
}

function print({ title }) {
	// body...
	console.log(title);
}

let book = {
	title: '独習c#',
	price: 3600,
	publisher: 'ヒラメ'
};

print(book);


function product(...nums) {
	// body...
	let result = 1;
	// 可変引数の内容を順に掛け合わせる
	for(let num of nums) {
		result *= num;
	}
	return result;
}

console.log(product(3, 4, 5));
