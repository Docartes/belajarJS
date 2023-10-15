/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  if (equation < 10) {
    return equation.toString();
  } else {
    let factor;
    if (equation >= 1000) {
      factor = 1000;
    } else if (equation >= 100) {
      factor = 100;
    } else if (equation >= 10) {
      factor = 10;
    } else {
      factor = 1;
    }

    const result = Math.floor(equation / factor) * factor;

    if (equation - result === 0) {
      return result.toString();
    } else {
      return `${result}+${parseNumber(equation - result)}`;
    }
  }
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3