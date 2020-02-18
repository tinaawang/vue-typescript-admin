<template>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Content extends Vue {}
</script>
<style lang="scss" scoped>
.content-wrapper {
  box-sizing: border-box;
  padding: 20px 20px 0px;
  height: 100%;
  background-color: rgba(245, 246, 250, 1);
  overflow: auto;
  & > div {
    border-radius: 3px;
  }
}
</style>
