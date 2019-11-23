import React from 'react';
import 'blockly';
import './blocks/TurtleBlock';
import './App.css';

import BlocklyComponent, { Block } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BlocklyComponent ref={e => this.workspace = e} readOnly={false} grid={{
          spacing: 20,
          length: 3
        }} initialXml={`
          <xml>
            <block type="controls_repeat"></block>
          </xml>
        `}>
          <Block type="controls_repeat" />
          <Block type="moveForward" />
          <Block type="turnRight" />
          <Block type="turnLeft" />
        </BlocklyComponent>
      </div>
    );
  }
}

export default App;
