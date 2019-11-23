<template>
  <div id="app">
    <blocklyComponent id="blockly" :options="options" ref="blockly">
    </blocklyComponent>
    <p id="code">
      上で組んだブロックのコードが以下に出力されます
      <pre v-html="code"></pre>
    </p>
  </div>
</template>

<script>
import BlocklyComponent from './components/BlocklyComponent.vue'
import './blocks/TurtleBlock';

export default {
  name: 'app',
  components: {
    BlocklyComponent
  },
  data() {
    return {
      code: '',
      options: {
        grid: {
          spacing: 25,
          length: 3,
        },
        toolbox: `
          <xml>
            <block type="controls_repeat"></block>
            <block type="moveForward"></block>
            <block type="turnRight"></block>
            <block type="turnLeft"></block>
          </xml>
        `
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#blockly {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 50%;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  margin: 0;
  background-color: beige;
}
</style>
