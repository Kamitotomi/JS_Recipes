let animalas = ['牛', '虎', '鹿', '家鴨', '鴎', '獅子']
// for (let i = 0; i < animalas.length; i++) {
	// console.log(animalas[i]);
// }

// こっちのが簡潔
// for(let value of animalas) {
	// console.log(value);
// }

// console.log(animalas.join());

// sliceで抜き出す

// console.log(animalas.slice(1, -1));

// spliceで配列の内容を置き換える（第二引数が0なら単なる挿入になる）

console.log(animalas.splice(1, 3, '鷲', '虹鱒'));
console.log(animalas);