const comb = require('js-combinatorics');
const crypto = require('crypto');

const _ = require('lodash');
//const data = require('./api-euromillions.json');
const fs = require('fs');

const numArray = Array.from(new Array(50),(val,index)=>index+1);
const starArray = Array.from(new Array(12),(val,index)=>index+1);

//const dataNum = data.drawns.map(num => {
//  return num.numbers.split(' ');
//});

const test1 = [[12, 5, 8, 130, 44], [2, 4, 6, 8, 10], [1, 5, 7, 9, 11], [12, 5, 8, 130, 44]];


function allPossible() {
  let a;
  //Array.from(new Array(50),(val,index)=>index+1);//Array.from(Array(50).keys());
  let results = [];

  let combinator = comb.bigCombination(numArray, 5);
  while ( a = combinator.next())
    results.push(a);

  console.log('Todas: ', results.length);

  results = removeNotInRange(results);

  results = removeSequence(results);

  console.log('95-160 e Seq: ',results.length);

  results = removeAllOddEven(results);

  console.log('OddEven: ',results.length);

  results = removeNumGroup(results);

  console.log('numgroup: ',results.length);

  function checkN(el) {
    return el === [6,10,19,29,36]
  }

  let dede = results.map(cur => {
    cur.every(checkN)
  })

  dede ? console.log(dede) : null



  /*fs.writeFile('./all-possible.json', JSON.stringify(results, null, 2), 'utf8', (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
  });*/
  return _.shuffle(results);

}

function removeSequence(arr) {
  let output = [];
  arr.map((cur, i, test) => {
    if (!seq(cur)) {
      output.push(cur)
    }
    //console.log(seq(cur));
  })
  return output;
}

function removeAllOddEven(arr) {
  let output = []
  arr.map(cur => {
    let oddCount = 0;
    let odd = cur.forEach(el => {
      el % 2 == 1 ? oddCount++ : null
      return oddCount
    })
    let evenCount = 0;
    let even = cur.forEach(el => {
      el % 2 == 0 ? evenCount++ : null
      return evenCount
    })

    if (oddCount <= 3 && evenCount <= 3) {
      //console.log(oddCount, evenCount)
      output.push(cur)
    }
  })
  //console.log(output.length, 'oddsEvens')
  return output;
}

let removeNumGroup = (arr) => {

  let reg = /(?:1[0-9]\S|]){3,}|(?:2[0-9]\S|]){3,}|(?:3[0-9]\S|]){3,}|(?:4[0-9]\S|]){3,}/;
  let output = []
  arr.map((cur, i, array) => {
    //console.log(reg.test(cur.toString()))
    if (!reg.test(cur.toString()))
      return output.push(cur)
  })
  return output
}


function removeNotInRange(arr) {
  let output = [];
  arr.map(cur => {
    let range = cur.reduce((total, val) => {
      return total + val
    }, 0)
    if (range > 95 && range < 161)
      output.push(cur)
  })
  return output;
}

function seq(arg) {
  let sequence = 0;
  for (let i = 0; i < arg.length; i++) {
    let diff = arg[i+1] - arg[i];
    if (sequence === diff && diff !== 0) {
      continue;
    }
    sequence = (Math.abs(diff) === 1) ? diff : 0;
    return sequence ? true : false;
    //return sequence;
  }
}

//allPossible();

function buildOutput() {


  let arr = allPossible();

  arr.filter((el) => {
    return el;//.toString();
  })

  let finalObj = arr.map((obj, i, a) => {
    let final = {};
      obj.i = 'numbers';
      //console.log(obj.i)
      final[obj.i] = obj;//_.join(obj, ' ');
      return final;

  })

  finalObj.map((item, i) => {
    let starN = _.sampleSize(starArray, 2)
    starN.sort((a,b) => { return a - b });
    item.stars = starN;//_.join(starN, ' ');
    //finalObj[item.i] = _.join(_.sampleSize(starArray, 2), ' ')
    //finalObj[item.stars] = _.join(_.sampleSize(starArray, 2), ' ')
    item.key = crypto.randomBytes(Math.ceil(4/2)).toString('hex').slice(0,4);
    return finalObj
  })


  //let a = _.chunk(finalObj, 18000)

  //a.map((cur, i) => {
  //  fs.writeFile('../../public/data/all-possible-' + i + '.json', JSON.stringify(cur), 'utf8', (err) => {
  //  if (err) throw err;
  //  console.log('It\'s saved!', i);
  //  });
  //})






  //fs.writeFile('./all-possible-arr.json', JSON.stringify(finalObj, null, 2), 'utf8', (err) => {
  //if (err) throw err;
  //console.log('It\'s saved!');
  //});
  //console.log(finalObj)


}


buildOutput();
