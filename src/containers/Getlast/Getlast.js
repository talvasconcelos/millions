import React, { Component } from 'react'
import * as getdata from '../../data/get-data'
import styled from 'styled-components'
import moment from 'moment'

import Timer from '../../components/Timer/Timer'

const Title = styled.h1`
  font-size: 2.5em;

  @media (min-width: 480px) {
    font-size: 4em;
  }
`

class Getlast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prizeVal: '€0',
      lastDraw: {},
      nextDraw: '',
    }
  }

  componentDidMount() {

    getdata.getPrize().then(output => {
      this.setState({prizeVal: output.split(' ')})
    })    

    //getdata.getLastResult().then(result => {
    //  this.setState({lastDraw: result[0]})
    //})

    this.timerID = setInterval(
      () => this.countDown(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countDown() {
    let time = moment()
    let diff = this.state.nextDraw - time
    //console.log(duration.seconds())
    this.setState({
      timer: diff
    })
  }


  render() {
    return (
      <div>
        <h4>Next prize prediction</h4>
        <Title>{this.state.prizeVal}</Title>
        <strong>Next Draw:</strong>
        <Timer diff={this.state.timer} next={this.state.nextDraw}/>
        <div>{this.state.lastDraw.numbers} + {this.state.lastDraw.stars}</div>
      </div>
    )
  }
}

export default Getlast
