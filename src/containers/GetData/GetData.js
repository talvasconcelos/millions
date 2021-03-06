import React, { Component } from 'react';
import * as getdata from '../../data/get-data';
import _ from 'lodash';
import moment from 'moment';
import styled from 'styled-components';

// import components
import PossibleKey from '../../components/PossibleKey/PossibleKey';
import Loader from '../../components/Loader/Loader';


// import possible results
//import pos from '../../data/all-possible-arr.json';
//let shuf = _.shuffle(pos);

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
  constructor(props) {
    super(props);
    this.state = {
      lastdraw: {},
      alldraws: [],
      bets: [],
      isLoading: false,
      showBets: false //_.sampleSize(shuf, 5)
    };
  }

  componentDidMount() {

  }

  getMore() {
    // this.setState((state, props) => ({
    //   isLoading: !state.isLoading
    // }));
    this.setState((state, props) => ({
      bets: getdata.getPossible(5)
    }));
    //getdata.getPossible(5)
    //  .then(result => {
    //    this.setState({bets: result})
    //  })
    this.setState((state, props) => ({
      showBets: !state.showBets
    }));
  }



  //getMore() {
  //  this.setState({isLoading: !this.state.isLoading})
  //  this.setState({bets: getdata.getPossible(5), showBets: !this.state.showBets})
  //}

  render() {
    return (
      <div>
        <Btn onClick={this.getMore.bind(this)}>Generate</Btn>
        {/* {this.state.bets.map((bet, i) => {return (<PossibleKey key={i} bets={bet}/>)})} */}
        <Loader show={this.state.isLoading} />
        {this.state.showBets ? this.state.bets.map((bet, i) => {return (<PossibleKey key={this.state.bets[i].key} bets={bet}/>)})/*<PossibleKey bets={this.state.bets.map(bet => {})} />*/ : null}
      </div>
    );
  }
}

export default GetData;
