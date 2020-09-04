let point = 85

if (point >= 80) {
	console.log('合格です');
} else if (point >= 60) {
	console.log('もう少しです');
} else {
	console.log('帰れ');
}

// else if が重なってめんどい時は swich

let blood = 'O';

switch (blood) {
	case 'A':
		console.log('A型です。');
		break;
	case 'B':
		console.log('B型です。');
		break;
	case 'O':
		console.log('O型です。')
		break;
	case 'AB':
		console.log('AB型です。')
		break;
	default:
		console.log('不明です。')
		break;
}