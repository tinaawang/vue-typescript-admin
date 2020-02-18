<template>
  <div class="header-wrapper">
    <div class="breadcrumb-wrapper">
      <span class="system-name">Dashbord</span>
    </div>
    <div class="userinfo-wrapper">
      <div class="avatar-wrapper">
        <img src="../../../assets/images/layout/avatar.png" alt="avatar" width="26" height="26">
      </div>
      <el-dropdown @command="operation" class="pointer ml-20">
        <span>
          {{ name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  clearUser,
  clearToken,
  clearMenus,
  clearRole,
  clearUsername
} from "@/utils/auth";

@Component({})
export default class Header extends Vue {
  @Prop({ default: " " }) readonly name!: string;

  dialogVisible: boolean = false;
  isFullScreen: boolean = false;
  operation(val: any) {
    switch (val) {
      case "logout":
        clearUser();
        clearToken();
        clearRole();
        clearMenus();
        clearUsername();
        this.$router.push({ name: "login" });
        break;
    }
  }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  height: 44px;
  box-sizing: border-box;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .breadcrumb-wrapper {
    display: flex;
    align-items: center;
    .system-name {
      margin-left: 8px;
      height: 19px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 19px;
    }
    .collapse-icon {
      margin-right: 20px;
      font-size: 24px;
      cursor: pointer;
    }
  }
  .userinfo-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    .avatar-wrapper {
      margin-right: 8px;
      display: flex;
      align-items: center;
    }
    .screen-icon {
      margin-right: 10px;
    }
  }
}
</style>
