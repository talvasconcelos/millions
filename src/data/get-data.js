import axios from 'axios'
import comb from 'js-combinatorics'
import crypto from 'crypto'
import _ from 'lodash'
import cheerio from 'cheerio'

const numArray = Array.from(new Array(50),(val,index)=>index+1)
const starArray = Array.from(new Array(12),(val,index)=>index+1)

/**
Scrape prize
**/

export function getPrize() {
  let reqData = {
    prize: 'div.est-jackpot'
  }
  return axios.get('https://www.euro-millions.com/')
    .then(response => {
      let $ = cheerio.load(response.data)
      let pageData = {}
      Object.keys(reqData).forEach(k => {
        pageData[k] = $(reqData[k]).text()
      })
      return (pageData)
    })
    .catch(error => {
      console.error(error)
    })

}

/**
Get last result
**/

export function getLastResult() {
  return axios.get('https://nunofcguerreiro.com/api-euromillions-json')
    .then(result => {
      return result.data.drawns
    })
}

/**
Get Possible result
**/



export function getPossible(n) {

  /*return new Promise (
    function (resolve, reject) {
      let a
      let results = []

      let combinator = comb.bigCombination(numArray, 5)
      while ( a = combinator.next() )
        results.push(a);

      results = removeNotInRange(results)
      results = removeSequence(results)
      results = removeAllOddEven(results)
      results = addKey(results)

      results = _.shuffle(results)
      resolve(_.sampleSize(results, n))
      reject(console.error())
    }
  );*/
  let a
  let results = []

  let combinator = comb.bigCombination(numArray, 5)
  while ( a = combinator.next() )
    results.push(a);

  results = removeNotInRange(results)
  results = removeSequence(results)
  results = removeAllOddEven(results)
  results = addKey(results)

  results = _.shuffle(results)

  return _.sampleSize(results, n)

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
    cur.forEach(el => {
      el % 2 === 1 ? oddCount++ : null
      return oddCount
    })
    let evenCount = 0;
    cur.forEach(el => {
      el % 2 === 0 ? evenCount++ : null
      return evenCount
    })

    if (oddCount <= 3 && evenCount <= 3) {
      //console.log(oddCount, evenCount)
      output.push(cur)
    }
  })
  //console.log(output.length, 'oddsEvens')
  //output = _.shuffle(output);
  return output;
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
  //output = _.shuffle(output);
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

function addKey(arg) {
  let finalObj = arg.map((obj, i, a) => {
    let final = {};
      obj.i = 'numbers';
      //console.log(obj.i)
      final[obj.i] = obj;//_.join(obj, ' ');
      return final
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

  return finalObj
}
