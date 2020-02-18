<template>
  <div class="top-bar-wrapper">欢迎你，开发者</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class topBar extends Vue {}
</script>

<style lang="scss" scoped>
.top-bar-wrapper {
  width: 100%;
  height: 90px;
}
</style>
