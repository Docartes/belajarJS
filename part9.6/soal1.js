function changeMe(arr) {
  // you can only write your code here!

  let data = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      data = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 2023 - arr[i][3],
      }
    } else {
      data = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 'Invalid Birth Day'
      }
    }

    let result = `${arr[i][0]} ${arr[i][1]}: ` + JSON.stringify(data)
    
    console.log(result);

  }


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
