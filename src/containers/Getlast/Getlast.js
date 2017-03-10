import React, { Component } from 'react'
import * as getdata from '../../data/get-data'
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h1`
  font-size: 2em;
`

class Getlast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prizeVal: 0,
      lastDraw: {}
    }
  }

  componentDidMount() {
    getdata.getPrize().then((result) => {
      let prize = parseInt(result.prize.match(/\d{2,}/g))
      prize += prize * 1000000
      this.setState({prizeVal: prize.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })})
    })
    getdata.getLastResult().then(result => {
      this.setState({lastDraw: result[0]})
    })
  }

  date() {
    let today = new Date().getTime()

    return today
  }

  render() {
    return (
      <div>
        <Title>{this.state.prizeVal}</Title>
        {this.date()}
      </div>
    )
  }
}

export default Getlast
