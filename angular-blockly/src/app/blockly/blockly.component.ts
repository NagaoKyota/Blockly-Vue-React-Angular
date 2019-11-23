import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly';

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})

export class BlocklyComponent implements OnInit {
  ngOnInit() {
    const blocklyDiv = document.getElementById('blocklyDiv');

    Blockly.inject(blocklyDiv, {
      readOnly: false,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      toolbox: `
        <xml>
          <block type="controls_ifelse"></block>
        </xml>
      `
    } as Blockly.BlocklyOptions);
  }
}
