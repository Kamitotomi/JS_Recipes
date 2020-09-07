// sortの使用例　役職順にソートする



// 役職リスト
let key = ['部長', '課長', '係長', '主任'];
// メンバーリスト
let members = [
	// 謎のグローバル設定
	{name: '滝本傑', position: '主任'},
	{name: '真鍋裕太', position: '部長'},
	{name: 'ウイリアム・ジェズス', position: '課長'},
	{name: 'イ・ソンヒョ', position: '課長'},
];

// 役職の配列における位置の大小で比較する方法

console.log(members.sort(function (m, n) {
	return key.indexOf(m.position) - key.indexOf(n.position);
}))