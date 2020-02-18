<template>
  <div class="home-contanier">
    <div class="top-bar-container">
      <top-bar></top-bar>
    </div>
    <div class="left-container"></div>
    <div class="right-container"></div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from "vue-property-decorator";
import topBar from "@/components/topBar.vue";

@Component({
  components: {
    topBar
  }
})
export default class Home extends Vue {}
</script>


<style lang="scss" scoped>
</style>


