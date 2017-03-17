import React, { Component } from 'react';
import styled from 'styled-components';

//kuler colors
// primary: #69FF60
// secondary: #39B232
// cta: #FF5453 or #B21F75

//import components
import Getlast from '../../containers/Getlast/Getlast';
import Bets from '../../containers/Bets/Bets';

const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5em 0 5em;
  width: 100%;
  background: #69FF60;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Getlast />
        </Header>
        <div className='container'>
          <Container>
            <Bets />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
