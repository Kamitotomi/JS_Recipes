// 正規表現の文字列取得

let ex = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/gi;
let str = 'サンプルファイルはhttp://www.wings.msn.to/から入手可能です';

str += 'ご質問はHTTP://www.wings.msn.to/index.php/-/B-14へお願いします。';

let result = str.match(ex)
for (let i = 0; i < result.length; i++) {
	console.log(result[i]);
}