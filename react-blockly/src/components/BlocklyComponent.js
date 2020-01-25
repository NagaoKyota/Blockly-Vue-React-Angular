import React from 'react';
import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';
import './BlocklyComponent.css';

import ja from 'blockly/msg/ja';
Blockly.setLocale(ja);

export default class BlocklyComponent extends React.Component {
  onChangeHandler = (event) => {
    if (event.type === Blockly.Events.MOVE) {
      this.props.setCode(BlocklyJS.workspaceToCode(this.workspace));
    }
  }

  componentDidMount() {
    const { initialXml, children, ...rest } = this.props;
    this.workspace = Blockly.inject(
      this.blocklyDiv,
      {
        toolbox: this.toolbox,
        renderer: 'zelos',
        ...rest
      },
    );

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.workspace);
    }
    this.workspace.addChangeListener(this.onChangeHandler);
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <div ref={e => this.blocklyDiv = e} id="blocklyDiv" />
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: 'none' }}
          ref={(toolbox) => { this.toolbox = toolbox; }}
        >
          {children}
        </xml>
      </>
    )
  }
} 
