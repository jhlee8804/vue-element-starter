<template>
  <div class="view">
    <h1>View 1</h1>
    <img src="static/img/logo.png">

    <div>
      <el-button @click="visible = true">Button</el-button>
      <el-dialog :visible.sync="visible" title="Hello world">
        <p>Try Element</p>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'View1',
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
.view {
}
</style>
