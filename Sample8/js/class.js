// オブジェクトってなんですか？

// {
	// データ１: 値１
	// データ２: 値２
	// データ３: 値３
// }

// コンストラクターの定義

class Article {
	constructor(title, url, intro){
		this.title = title;
		this.url = url;
		this.intro = intro;
	}
	toString() {
		return `${this.title} (${this.url}): ${this.intro}`;
	}
}

let a = new Article(
	'タイトル',
	'ゆーあーるえる',
	'紹介文'
);

console.log(a.toString());
