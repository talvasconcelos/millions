import React, { Component } from 'react'
import * as getdata from '../../data/get-data'
import styled from 'styled-components'
import moment from 'moment'

import Timer from '../../components/Timer/Timer'

const Title = styled.h1`
  font-size: 2.5em;
  margin-top: 0;
  margin-bottom: 0;

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
      timer: 0
    }
  }

  componentDidMount() {

    getdata.getPrize().then(output => {
      this.setState({prizeVal: output.split(' ')})
    })

    let next = getdata.closest_tuesday_or_friday().hour(20).minute(0).seconds(0)

    this.setState({nextDraw: next})

    this.timerID = setInterval(
      () => this.countDown(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countDown() {
    let time = moment().valueOf()
    let diff = this.state.nextDraw - time
    this.setState({
      timer: diff
    })
  }


  render() {
    return (
      <div>
        <h4>Next prize prediction</h4>
        <Title>{this.state.prizeVal}</Title>
        <Timer diff={this.state.timer} next={this.state.nextDraw}/>
      </div>
    )
  }
}

export default Getlast
