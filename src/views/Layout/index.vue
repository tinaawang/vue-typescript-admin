<template>
  <div class="layout-wrapper">
    <div class="header-body">
      <Header :name="name"></Header>
    </div>

    <div class="content">
      <div class="menu-body">
        <SideBar :list="routes"></SideBar>
      </div>
      <div class="content-body">
        <Content></Content>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Content from "./components/Content.vue";

import { getMenus, getUsername } from "@/utils/auth";

@Component({
  components: {
    Header,
    SideBar,
    Content
  }
})
export default class Layout extends Vue {
  routes: any[] = [];
  name: string = "";

  mounted() {
    this.routes = getMenus();
    this.name = getUsername();
  }
}
</script>
<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  .header-body {
    box-shadow: 0px 3px 8px 0px rgba(4, 124, 147, 0.1);
    position: relative;
    z-index: 100;
  }
  .content {
    height: calc(100% - 45px);
    width: 100%;
    display: flex;
    .content-body {
      flex-grow: 1;
      overflow: hidden;
    }
  }
}
</style>
