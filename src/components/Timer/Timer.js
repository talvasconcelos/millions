import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Block = styled.div`
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
const Digit = styled.span`
  font-weight: 700;
  font-size: 2em;
`

const Timer = props => (
  <Block>
    { Math.floor(moment.duration(props.diff).asHours()) > 24 ?
      <Digit key='d'>Draw {moment(props.next).fromNow()}</Digit> :
      <div>
        <Digit key='h'>{Math.floor(moment.duration(props.diff).asHours())}h&nbsp;:</Digit>
        <Digit key='m'>&nbsp;{moment.duration(props.diff).minutes()}m&nbsp;:</Digit>
        <Digit key='s'>&nbsp;{moment.duration(props.diff).seconds()}s</Digit>
      </div> }
  </Block>
)

export default Timer
