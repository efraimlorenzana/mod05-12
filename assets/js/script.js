let txtNum = document.querySelector('#txtNum');
let txtWord = document.querySelector('#txtWord');

let ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
let teen = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
let tens = ['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];
let bigNumber = ['','','Thousand','Million','Billion','Trillion','Quadrillion'];

const convertNumToWord = () => {
	let places = 1;
	let result = "";
	let cent = getCents(txtNum.value);
	let Num = txtNum.value.split('.')[0];
	let temp = "";
	let pesos = "Pesos";

	while(Num != 0) {
		temp = getHundred(Num.slice(-3));
		result = `${temp} ${bigNumber[places]} ${result}`;

		if(Num.length > 3)
			Num = Num.substring(0,(Num.length - 3));
		else
			Num = 0;

		places++;
	}

	if(result.trim() === "One"){
		pesos = 'peso';
	}

	txtWord.textContent = `${result} ${pesos} ${cent}`;
}

const getCents = (Num) => {
	let dec = Num.split('.');
	let result = "";
	let cent = "Centavos";

	if(dec[1] != undefined){
		if(dec[1] == 1)
			cent = "Centavo";

		if(dec[1].length == 1)
			dec[1] = dec[1] + "0";

		result = ` and ${getHundred(dec[1])} ${cent}`;
	}

	return result;
}

const getHundred = (Num) => {
	let strNum = "000" + Num;
	let newNum = strNum.slice(-3);
	let result = "";

	if(newNum[0] != 0)
		result = `${ones[newNum[0]]} Hundred `;

	if(newNum[1] == 0)
		result += ones[newNum[2]];
	else
		result += getTens(newNum);

	return result;
}

const getTens = (Num) => {
	let tensNum = Num.slice(-2);
	let result = "";


	if(tensNum[0] == 1) {
		result = teen[tensNum[1]];
	} else {
		result = tens[tensNum[0]] + ` ${ones[tensNum[1]]}`;
	}


	if(tensNum.length == 1)
		result = ones[tensNum];

	return result;
}

