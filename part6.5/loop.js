// 1. While Loop
/*
console.log("While Loop Maju")
let i = 1;
let hasil = '';
while (i <= 5) {
  hasil += i + " ";
  i++;
}
console.log(hasil);

console.log("While Loop Mundur");
let j = 5;
let output = '';
while (j > 0) {
  output += j + " ";
  j--;
}
console.log(output);
*/

// 2. For Loop
/*
console.log("For Loop Maju");
let hasil = '';
for (let i = 1; i <= 10; i++) {
  hasil += i + " ";
}
console.log(hasil);

console.log("For Loop Mundur");
let output = '';
for (let j = 10; j > 0; j--) {
  output += j + " ";
}
console.log(output);
*/


// 3. Mencari bilangan genpa dan ganjil dari 1 - 100, menggunakan for loop
/*
for (let i = 1; i <= 100; i++) {
  i % 2 == 1 ? console.log(`${i} adalah bilangan ganjil`) : console.log(`${i} adalah bilangan genap`);
}
*/


// 4. Buat 3 perulangan 1 - 100, dengan counter 2, 5, 9
// Counter 2
// for (let i = 1; i <= 100; i += 2) {
//   i % 3 == 0 ? console.log(`${i} kelipatan 3`) : console.log(i);
// }

// // Counter 5
// for (let j = 1; j <= 100; j += 5) {
//   j % 6 == 0 ? console.log(`${j} adalah kelipatan 6`) : console.log(j);
// }

// // Counter 9
// for (let k = 1; k <= 100; k += 9) {
//   k % 10 == 0 ? console.log(`${k} adalah kelipatan 10`) : console.log(k);
// }

// 5. Membuat pola segitiga menggunakan for loop
let input = 10;
for (let i = 1; i <= input; i++) {
  let bintang = '';
  for (let j = i; j <= input; j++) {
    bintang += '*';
  }
  console.log(bintang);
}
