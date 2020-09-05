// pop shift 要素の追加と削除

// let data = [ 'パンダ', 'うさぎ', 'こあら' ]

// 末尾に追加

// data.push('ハムスター')
// 先頭に追加
// data.unshift('ねこ')

// console.log(data);

// console.log(data.pop());
// console.log(data.shift());

// console.log(data);

// 配列の連結

// let data1 = [ 'パンダ', 'うさぎ', 'こあら' ];
// let data2 = [ 'たぬき', 'きつね', 'さる' ];
// let data3 = [ 'うし', 'うま', 'とり' ]

 // console.log(data1.concat(data2, data3));

 let data1 = {
 	id: 10,
 	name: 'Yamada',
 	description: {
 		birth: '1998-02-26'
 	},
 };

 let data2 = {
 	age: 40,
 	married: true,
 	description: {
 		job: '塾講師'
 	},
 };

 let data3 = {
 	blood: 'A',
 	name: 'Taro Yamada',
 	
 };

Object.assign(data1, data2, data3);
console.log(data1);