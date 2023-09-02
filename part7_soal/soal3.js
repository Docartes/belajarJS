function konversiMenit(menit) {
  // you can only write your code here!
  let mnt = Math.round(menit / 60);
  let detik = menit % 60;
  return detik < 10 ? `${mnt}:0${detik}` : `${mnt}:${detik}`;

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
