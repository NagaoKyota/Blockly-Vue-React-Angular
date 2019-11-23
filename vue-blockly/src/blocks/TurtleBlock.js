import * as Blockly from 'blockly/core';

Blockly.Blocks["moveForward"] = {
  init() {
    this.setPreviousStatement(true);
    this.jsonInit({
      message0: `%1 前に進む`,
      args0: [
        {
          type: 'field_number',
          name: 'VALUE',
          value: 100,
          min: 0,
        },
      ],
    });
    this.setNextStatement(true);
    this.setColour(160);
  },
};

Blockly.JavaScript["moveForward"] = (block) => {
  const move = block.getFieldValue('VALUE');
  const code = `moveForward(${move});\n`;
  return code;
}

Blockly.Blocks["turnRight"] = {
  init() {
    this.setPreviousStatement(true);
    this.jsonInit({
      message0: `%1 ° 右に曲がる`,
      args0: [
        {
          type: 'field_number',
          name: 'VALUE',
          value: 90,
          min: 0,
        },
      ],
    });
    this.setNextStatement(true);
    this.setColour(160);
  },
};

Blockly.JavaScript["turnRight"] = (block) => {
  const move = block.getFieldValue('VALUE');
  const code = `turnRight(${move});\n`;
  return code;
}

Blockly.Blocks["turnLeft"] = {
  init() {
    this.setPreviousStatement(true);
    this.jsonInit({
      message0: `%1 ° 左に曲がる`,
      args0: [
        {
          type: 'field_number',
          name: 'VALUE',
          value: 90,
          min: 0,
        },
      ],
    });
    this.setNextStatement(true);
    this.setColour(160);
  },
};

Blockly.JavaScript["turnLeft"] = (block) => {
  const move = block.getFieldValue('VALUE');
  const code = `turnLeft(${move});\n`;
  return code;
}
