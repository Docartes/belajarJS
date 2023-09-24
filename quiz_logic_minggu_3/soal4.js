/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/

function graduates (students) {
  // Code disini


  let result = {};
  let nilaiFoxes = [];
  let namaFoxes = [];

  let nilaiWolves = []; 
  let namaWolves = [];

  let nilaiTigers = [];
  let namaTigers = [];

  for ( let i = 0; i < students.length; i++ ) {
    if ( students[i].score > 75 && students[i].class == 'foxes' ) {
      nilaiFoxes.push(students[i].score)
      namaFoxes.push(students[i].name)
      let lulus = [];
      for ( let j = 0; j < nilaiFoxes.length; j++ ) {
        let obj = {
          name: namaFoxes[j],
          score: nilaiFoxes[j]
        }

        lulus.push(obj)
        
      }
      result.foxes = lulus;
    }


    if ( students[i].score > 75 && students[i].class == 'wolves' ) {
      nilaiWolves.push(students[i].score)
      namaWolves.push(students[i].name)
      let lulus = [];
      for ( let j = 0; j < nilaiWolves.length; j++ ) {
        let obj = {
          name: namaWolves[j],
          score: nilaiWolves[j]
        }

        lulus.push(obj)
        
      }
      result.wolves = lulus;
    }

    if ( students[i].score > 75 && students[i].class == 'tigers' ) {
      nilaiTigers.push(students[i].score)
      namaTigers.push(students[i].name)
      let lulus = [];
      for ( let j = 0; j < nilaiTigers.length; j++ ) {
        let obj = {
          name: namaTigers[j],
          score: nilaiTigers[j]
        }

        lulus.push(obj)
        
      }
      result.tigers = lulus;
    }
  }



  // console.log(nama)


  return result
}

console.log(graduates([
{
  name: 'Dimitri',
  score: 90,
  class: 'foxes'
},
{
  name: 'Alexei',
  score: 85,
  class: 'wolves'
},
{
  name: 'Sergei',
  score: 74,
  class: 'foxes'
},
{
  name: 'Anastasia',
  score: 78,
  class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
  name: 'Alexander',
  score: 100,
  class: 'foxes'
},
{
  name: 'Alisa',
  score: 76,
  class: 'wolves'
},
{
  name: 'Vladimir',
  score: 92,
  class: 'foxes'
},
{
  name: 'Albert',
  score: 71,
  class: 'wolves'
},
{
  name: 'Viktor',
  score: 80,
  class: 'tigers'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}