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
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5em 0 5em;
  width: 100%;
  background: #69FF60;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Getlast />
        </Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

export default App;
