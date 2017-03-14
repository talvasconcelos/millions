import React, { Component } from 'react'
import * as getdata from '../../data/get-data'
import styled from 'styled-components'
import moment from 'moment'

import Timer from '../../components/Timer/Timer'

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1em;
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
    getdata.getPrize().then((result) => {
      let date = result.dateNext.match(/(\d{1,2}.\d{2}.\d{4})/g)
      date = moment(date, 'DD/MM/YYYY').add(19, 'hours')
      this.setState({prizeVal: result.prize.split(' '), nextDraw: date})
    })
    getdata.getLastResult().then(result => {
      this.setState({lastDraw: result[0]})
    })

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
