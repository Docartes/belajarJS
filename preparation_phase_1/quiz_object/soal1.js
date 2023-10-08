/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/

function isPrime(num) {
  if ( num < 2 ) {
    return false
  }

  for ( let i = 2; i <= Math.sqrt(num); i++ ) {
    if ( num % i == 0 )  {
      return false
    }
  }

  return true
}

function strToNum(str) {
  let result = str.replace(/[A-Z\s]/g, '')
  return result
}

function ganjilGenapAsianGames(date, data) {
  //code here
  if ( date <= 0 || date > 31 ) {
    return 'Invalid Dates'
  }

  if ( date % 2 == 0 ) {
    let numbers = []
    let result = 0;
    for ( let obj of data ) {
      numbers.push(strToNum(obj.plat))
    }

    for ( let i = 0; i < numbers.length; i++ ) {
      if ( !isPrime(parseInt(numbers[i][numbers[i].length - 1])) && parseInt(numbers[i][numbers[i].length - 1]) % 2 == 1 ) {
        result += 1
      }
    }

    return result
  }

  if ( date % 2 == 1 ) {
    let numbers = []
    let result = 0

    for ( let obj of data ) {
      numbers.push(strToNum(obj.plat))
    }

    for ( let number of numbers ) {
      if ( number[number.length - 1] % 2 == 0 ) {
        result += 1
      }
    }

    return result
  }
}

console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 24 WE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 XOXO',
  type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 2431 HE',
  type: 'Motor'
}, {
  plat: 'AB 8711 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Motor'
}])) // 0

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates