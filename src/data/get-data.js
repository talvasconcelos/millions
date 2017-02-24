import axios from 'axios'

/**
Get last result
**/

export function getLastResult() {
  return axios.get('https://nunofcguerreiro.com/api-euromillions-json')
    .then(response => response.data)
}
