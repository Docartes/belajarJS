/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/


function sorting(arrNumber) {
  // code di sini
  let sortArr = arrNumber.sort();
  return sortArr;
}

function getTotal(arrNumber) {
  // code di sini
  /*
  let max = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (i == 0) {
      max = 0;
    } else {
      if (arrNumber[i] > max) {
        max = arrNumber[i];
      }
    }
  }
  */

  max = Math.max(...arrNumber);

  return max;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  let count = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == countHighest) {
      count += 1;
    } else {
      count += 0;
    }
  }

  if (countHighest < 0) {
    return "''";
  } else {
    return `Angka paling besar adalah ${countHighest}, dan jumlah kemunculan sebanyak ${count}`;
  }
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''