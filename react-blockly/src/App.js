import React from 'react';
import 'blockly';
import './blocks/TurtleBlock';

import './App.css';

import BlocklyComponent, { Block } from './components';
import Code from './components/Code';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      code: ''
    };
    this.setCode = this.setCode.bind(this);
  }

  setCode(code) {
    this.setState({
      code: code
    });
  }

  render() {
    return (
      <div className="App">
        <BlocklyComponent
          setCode={this.setCode}
          ref={e => this.workspace = e}
          grid={{
            spacing: 20,
            length: 3
          }}
          initialXml={`
            <xml>
              <block type="controls_repeat"></block>
            </xml>
          `}
        >
          <Block type="controls_repeat" />
          <Block type="moveForward" />
          <Block type="turnRight" />
          <Block type="turnLeft" />
        </BlocklyComponent>
        <Code code={this.state.code} />
      </div>
    );
  }
}

export default App;
