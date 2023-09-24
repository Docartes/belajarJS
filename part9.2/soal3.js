function cariMedian(arr) {
  // you can only write your code here!
  let sorted = arr.sort((a, b) => a - b);
  let hasil = 0;
  let indexTengah = Math.floor((sorted.length - 1) / 2)

  return sorted.length % 2 == 1 ? hasil = sorted[indexTengah] : hasil = (sorted[indexTengah] + sorted[indexTengah + 1]) / 2;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5