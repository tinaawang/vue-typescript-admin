<template>
  <div class="sidebar-wrapper">
    <el-menu :collapse="isCollapse" :default-active="$route.path" router>
      <template v-for="(route, index) of list">
        <!-- 不显示父菜单 直接显示子菜单 -->
        <template v-if="!route.meta.showSubmenu && route.children && route.children.length > 0">
          <el-menu-item
            v-for="childRoute of route.children"
            :index="childRoute.path"
            :key="childRoute.path"
          >
            <i :class="childRoute.meta.icon"></i>
            <span slot="title">{{childRoute.meta.title}}</span>
          </el-menu-item>
        </template>
        <!-- 显示父菜单 父菜单里面是子菜单 -->
        <el-submenu
          :index="route.path"
          :key="index"
          v-if="route.meta.showSubmenu && route.children && route.children.length > 0"
        >
          <template slot="title">
            <i :class="route.meta.icon"></i>
            <span>{{route.meta.title}}</span>
          </template>
          <template v-for="(childRoute, index) of route.children">
            <el-menu-item :index="childRoute.path" :key="index">
              <i :class="childRoute.meta.icon"></i>
              <span slot="title">{{childRoute.meta.title}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class SideBar extends Vue {
  @Prop({ default: () => [] }) private list!: any[];

  isCollapse: any = false;

  mounted() {
    console.log(this.list, 899);
  }
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100%;
  .el-menu {
    height: 100%;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
