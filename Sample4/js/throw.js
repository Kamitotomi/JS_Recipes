// 例外を投げる　throw命令

function getCircleArea(radius) {
	// body...
	if (typeof (radius) !== 'number' || radius <= 0) {
		// !== は正しくない場合がtrue
		throw new TypeError('引数radiusは正の数値にしてください');
	}
	return radius * radius * Math.PI;
}

try {
	console.log(getCircleArea(-1));
} catch(ex) {
	console.error(ex.message);
}