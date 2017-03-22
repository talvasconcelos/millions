import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75em;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.25em;
  font-weight: 700;
  margin: 2em auto;
  background: ${props => props.bg};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    filter: brightness(80%);
  }
`

export default Button
