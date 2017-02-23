import React, { Component } from 'react';
import axios from 'axios';
//const data = require('./api-euromillions.json');

const data = req => {
  axios
    .get('https://nunofcguerreiro.com/api-euromillions-json.json')
    .then(result => {
      console.log(result)
    });
}

class GetData extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{data}</p>
        <p>{data.numbers}</p>
        <ul>
        {/* {data.map((num) => {
          return (
            <li>{num.numbers}</li>
          );
        })} */}
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default GetData;
