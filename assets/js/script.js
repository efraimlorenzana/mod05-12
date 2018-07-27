let txtNum = document.querySelector('#txtNum');
let txtWord = document.querySelector('#txtWord');

let ones = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
let teen = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
let tens = ['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];
let bigNumber = ['','','','Hundred','Thousand','Million','Billion'];

const convertNumToWord = () => {
	let numLen = txtNum.value.length;
	let convertedWord = "";
	switch (numLen){
		case 1: convertedWord = ones[txtNum.value]; break;
		case 2: convertedWord = getTens(txtNum.value); break;
		case 3: convertedWord = getHundred(numLen,txtNum.value); break;
		case 4: 
				let numHundred = txtNum.value.slice(-3);
				convertedWord = getHundred(3,numHundred);
			break;
		default: break;
	}
	txtWord.textContent = convertedWord;
}

getTens = (num) => {
	if(num[0] === "1") {
		convertedWord = teen[num[1]];
	} else {
		if(num[1] === "0"){
			convertedWord = tens[num[0]];
		} else {
			convertedWord = tens[num[0]] + "-" + ones[num[1]];
		}
	}
	return convertedWord;
}

getHundred = (numLen,num) => {
	if(num[1] === "0" && num[2] === "0") {
				/// exact hundreds
		convertedWord = ones[num[0]] + " " + bigNumber[numLen];
	} else if(num[1] === "0" && num[2] !== "0") {
		convertedWord = ones[num[0]] + " " + bigNumber[numLen] + " " + ones[num[2]];
	} else if(num[1] === "1") {
		convertedWord = ones[num[0]] + " " + bigNumber[numLen] + " " + teen[num[2]];
	} else if(num[1] !== "0" && num[2] !== "0") {
		convertedWord = ones[num[0]] + " " + bigNumber[numLen] + " " + tens[num[1]] + "-" + ones[num[2]];
	} else if(num[1] !== "0" && num[2] === "0") {
		convertedWord = ones[num[0]] + " " + bigNumber[numLen] + " " + tens[num[1]];
	}

	return convertedWord;
}
