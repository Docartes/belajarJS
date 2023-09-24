function highestScore (students) {
  // Code disini

  let result = {};
  

  for ( let i = 0; i < students.length; i++ ) {
    for ( let key in students[i] ) {
      if ( students[i].class == 'foxes' ) {
        let nilai = [];
        nilai.push(students[i].score);
        if ( students[0].score == Math.max(...nilai) ) {
          result.foxes = {
            name: students[i].name,
            score: students[i].score  
          }
        }
      }


      if ( students[i].class == 'wolves' ) {
        let nilai = [];
        nilai.push(students[i].score);
        if ( students[1].score == Math.max(...nilai) ) {
          result.wolves = {
            name: students[i].name,
            score: students[i].score,
          }
        }    
      }
    }

    if ( students[i].class == 'tigers' ) {
      let nilai = [];
      nilai.push(students[i].score);
      if ( students[i].score == Math.max(...nilai) ) {

        result.tigers = {
          name: students[i].name,
          score: students[i].score,
        }
      } 
    }
  }
  return result;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}