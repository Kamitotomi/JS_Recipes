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

let book = {
	title: '一か月で中学英語を復習する本',
	price: 3600,
	publisher: 'カサゴ出版'
};

print(book);