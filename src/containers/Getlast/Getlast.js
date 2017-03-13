import React, { Component } from 'react'
import * as getdata from '../../data/get-data'
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h1`
  font-size: 2.5em;
`

const Timer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.5em;
  background: #39B232;
`

class Getlast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prizeVal: '€0',
      lastDraw: {},
      nextDraw: '',
      timer: ''
      //days: '',
      //hours: '',
      //minutes: '',
      //seconds: ''
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
    //nextDraw.isBefore(moment(this.state.today).subtract(1, 'day')) ? this.countDown : displayDate
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
        <Timer>
          <span key='d'>{moment.duration(this.state.timer).days()} Days</span>
          <span key='h'>{moment.duration(this.state.timer).hours()} Hours</span>
          <span key='m'>{moment.duration(this.state.timer).minutes()} Minutes</span>
          <span key='s'>{moment.duration(this.state.timer).seconds()} Seconds</span>
        </Timer>
      </div>
    )
  }
}

export default Getlast
