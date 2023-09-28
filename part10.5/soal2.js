/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let vokal = ['a', 'i', 'u', 'e', 'o'];
  let newStr = '';

  for ( let i = 0; i < str.length; i++ ) {
  	if ( vokal.includes(str[i].toLowerCase()) ) {
  		let temp = str[i].charCodeAt(0) + 1;
  		newStr += String.fromCharCode(temp);
  	} else {
  		newStr += str[i];
  	}
  }

  return newStr;
}

function reverseWord(str) {
  //code di sini
  let string = changeVocals(str);
  let result = '';

  for ( let i = string.length - 1; i >= 0; i-- ) {
  	result += string[i];
  }

  return result;
}

function setLowerUpperCase(str) {
  //code di sini

  let string = reverseWord(str);
  let result = '';

  for ( let i = 0; i < string.length; i++ ) {
  	if ( string[i] == string[i].toLowerCase() ) {
  		result += string[i].toUpperCase();
  	} else {
  		result += string[i].toLowerCase();
  	}
  }

  return result;
}

function removeSpaces(str) {
  //code di sini

  let string = setLowerUpperCase(str);
  let result = '';

  for ( let i = 0; i < string.length; i++ ) {
  	result += string[i].replace(' ', '')
  }

  return result;
}

function passwordGenerator(name) {
  //code di sini
  if ( name.length < 5 ) {
  	return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  return removeSpaces(name)
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'