import React from 'react'
import styled from 'styled-components'

const NumBg = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: 1px solid palevioletred;
`

const Number = styled.span`
  font-size: 1.25em;
  color: palevioletred;
`
const Star = styled.span`
  font-size: 1.25em;
  color: palevioletred;
`


function PossibleKey(props) {
  return (
    <div key={props.bets.key + 'num'}>
      {props.bets.numbers.map((num, i, arr) => {
        return (
          <NumBg key={i}>
            <Number>{num}</Number>
          </NumBg>

        )
      })}
      <strong>+</strong>
      {props.bets.stars.map((star, i, arr) => {
        return (
          <NumBg key={i+'star'}>
            <Star>{star}</Star>
          </NumBg>

        )
      })}
    </div>
  )
}

export default PossibleKey
