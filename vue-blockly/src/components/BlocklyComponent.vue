<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="display:none">
      <!-- what is slot? -->
      <slot></slot>
    </xml>
  </div>  
</template>

<script>
import Blockly from 'blockly';
import * as Ja from 'blockly/msg/ja';
Blockly.setLocale(Ja);

export default {
  name: 'BlocklyComponent',
  props: ['options'],
  data() {
    return {
      workspace: null
    };
  },
  mounted() {
    const options = this.$props.options || {};
    if (!options.toolbox) {
      options.toolbox = this.$refs['blocklyToolbox'];
    }
    this.workspace = Blockly.inject(this.$refs['blocklyDiv'], options);
  }
}
</script>

<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
}
</style>