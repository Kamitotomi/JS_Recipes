function required(msg) {
	// body...
	throw new Error(msg);
}

function getSquareArea(
	width = required('幅が指定されてない') ,
	height = required('高さが指定されていない')) {
	// body...
	return width * height
}

console.log(getSquareArea(2, 4));
