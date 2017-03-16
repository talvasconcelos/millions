import React, { Component } from 'react'
import * as getdata from '../../data/get-data'
import styled from 'styled-components'

import PossibleKey from '../../components/PossibleKey/PossibleKey'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader/Loader'

class Bets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: false,
      bets: []
    }
  }

  componentDidMount() {

  }

  handleClick() {
    this.setState((prevState, props) => ({
      bets: getdata.getPossible(5)
    }))
  }

  render() {
    return (
      <div>
        {this.state.isloading ? <Loader /> : null}
        {this.state.bets.map((bet, i) => {return (<PossibleKey key={this.state.bets[i].key} bets={bet}/>)})}
        {/* {!this.state.isLoading ? this.state.bets.map((bet, i) => {return (<PossibleKey key={this.state.bets[i].key} bets={bet}/>)}) : null} */}
        <Button onClick={this.handleClick.bind(this)}>Generate</Button>
        <p><small>Click the button to generate some wining keys for your next Euromillions bet.</small></p>
      </div>
    )
  }

}

export default Bets
