import React from 'react';
import 'blockly';
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
            <block type="controls_ifelse" x="0" y="0"></block>
          </xml>
        `}>
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="controls_repeat" />
        </BlocklyComponent>
      </div>
    );
  }
}

export default App;
