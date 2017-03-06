import React, { Component } from 'react';
import * as getdata from '../../data/get-data';
import _ from 'lodash';
import moment from 'moment';
import styled from 'styled-components'
// import components
import PossibleKey from '../../components/PossibleKey/PossibleKey';


// import possible results
import pos from '../../data/all-possible-arr.json';
let shuf = _.shuffle(pos);

// Styled Components
const Btn = styled.button`
  padding: 0.5em 1em;
  font-size: 2em;
  font-weight: 700;
  margin: 2em auto;
  background: palevioletred;
  color: papayawhip;
  border: none;
  border-radius: 3px;
  filter: drop-shadow(0px 0px 8px rgba(0,0,0,0.6));
  transition: all 0.2s ease;

  &:hover {
    filter: drop-shadow(0px 0px 12px rgba(0,0,0,0.6));
  }
`

class GetData extends Component {
  constructor() {
    super();
    this.state = {
      lastdraw: {},
      alldraws: [],
      bets: [],
      showBets: true //_.sampleSize(shuf, 5)
    };
  }

  componentDidMount() {
    getdata.getLastResult().then((result) => {
      this.setState({lastdraw: result.data.drawns[0], bets: _.sampleSize(shuf, 5)})
    })
  }

  getPossible() {
    this.setState({bets: _.sampleSize(shuf, 5), showBets: true});
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{moment(this.state.lastdraw.date).format('LL')}</h3>

        <div><span>{this.state.lastdraw.numbers}</span> + <span>{this.state.lastdraw.stars}</span></div>
        <Btn onClick={this.getPossible.bind(this)}>Generate</Btn>
        {/* {this.state.bets.map((bet, i) => {return (<PossibleKey key={i} bets={bet}/>)})} */}
        {this.state.showBets ? this.state.bets.map((bet, i) => {return (<PossibleKey key={this.state.bets[i].key} bets={bet}/>)})/*<PossibleKey bets={this.state.bets.map(bet => {})} />*/ : null}

        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default GetData;
