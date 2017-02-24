import React, { Component } from 'react';
import * as getdata from '../../data/get-data';
//const data = require('./api-euromillions.json');

class GetData extends Component {
  constructor() {
   super();
   this.state = {
     data: {},
   };
  }

  componentDidMount() {
    getdata.getLastResult().then(data => {
      this.setState({data: data.drawns[0]})
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.data.date}</p>
        <p>
          <span>{this.state.data.numbers}</span> + <span>{this.state.data.stars}</span>
        </p>
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
