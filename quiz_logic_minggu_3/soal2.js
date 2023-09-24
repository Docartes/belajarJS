/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let result = [];
  var tujuan = 0;
  var naikDari = 0;

  for ( let arr of arrPenumpang ) {
  	for ( let i = 0; i < rute.length; i++ ) {
  		if ( rute[i] == arr[2] ) {
  			tujuan = i;
  		} 

  		if ( rute[i] == arr[1] ) {
  			naikDari = i
  		}
  	}
  	let obj = {
  		penumpang: arr[0],
  		naikDari: arr[1],
  		tujuan: arr[2],
  		bayar: (tujuan - naikDari) * 2000
  	}

  	result.push(obj)
  }
  

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]