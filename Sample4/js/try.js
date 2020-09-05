// 例外を処理
try {
	console.log(ponta);
} catch(ex) {
	console.log(ex.message);
} finally {
	console.log('コードが終了しました')
}