import { Component, OnInit } from '@angular/core';
import * as Blockly from 'blockly';
import * as Ja from 'blockly/msg/ja';
import '../blocks/TurtleBlock';

@Component({
  selector: 'app-blockly',
  templateUrl: './blockly.component.html',
  styleUrls: ['./blockly.component.scss']
})

export class BlocklyComponent implements OnInit {
  ngOnInit() {
    const blocklyDiv = document.getElementById('blocklyDiv');

    Blockly.setLocale(Ja);
    Blockly.inject(blocklyDiv, {
      grid: {
        spacing: 20,
        length: 3
      },
      toolbox: `
        <xml>
          <block type="controls_repeat"></block>
          <block type="moveForward"></block>
          <block type="turnRight"></block>
          <block type="turnLeft"></block>
        </xml>
      `
    } as Blockly.BlocklyOptions);
  }
}
