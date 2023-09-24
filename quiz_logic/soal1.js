/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  
  let indexX = -1;
  let indexO = -1;

  let jarakTerdekat = arr.length;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] === 'o' ) {
      indexO = i;
    } else if ( arr[i] === 'x' ) {
      indexX = i;
      let jarak = Math.abs(indexX - indexO);
      if ( jarak < jarakTerdekat ) {
        jarakTerdekat = jarak;
      }
    } 
    if ( !arr.includes('x') ) {
      jarakTerdekat = 0;
    }
  }

  return parseInt(jarakTerdekat);

}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
