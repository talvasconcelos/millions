import React from 'react'
import styled from 'styled-components'

const NumRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0.75em auto;
  color: black;
`

const Bg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.star ? '#39B232' : props.number ? '#69FF60' : 'none'}
  width: 2em;
  height: 2em;
  border-radius: 50%;
  margin: ${props => props.plus ? '-10px' : '2px'};
`

const Num = styled.span`
  flex: 1 1 auto;
`



function PossibleKey(props) {
  return (
    <NumRow key={props.bets.key + 'num'}>
      {props.bets.numbers.map((num, i, arr) => {
        return (
          <Bg number key={i}>
            <Num key={i}>{num}</Num>
          </Bg>

        )
      })}
      <Bg plus ><Num>+</Num></Bg>
      {props.bets.stars.map((star, i, arr) => {
        return (
          <Bg star key={i}>
            <Num key={i+'star'}>{star}</Num>
          </Bg>

        )
      })}
    </NumRow>
  )
}

export default PossibleKey
