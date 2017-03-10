import React, { Component } from 'react';
import styled from 'styled-components';

//kuler colors
// primary: #69FF60
// secondary: #39B232
// cta: #FF5453 or #B21F75

//import components
import Getlast from '../../containers/Getlast/Getlast';
import GetData from '../../containers/GetData/GetData';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
  padding: 20px;
  background: #69FF60;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Getlast />
        </Header>
      </div>
    );
  }
}

export default App;
