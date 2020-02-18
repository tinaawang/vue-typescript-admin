<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="title">Welcome</div>
      <el-form label-position="left" ref="form" :model="form" :rules="loginRules">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" style="width:240px;"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" style="width:240px;"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-button">
        <el-button type="primary" class="login-button" @click="login">登录</el-button>
      </div>
      <div class="login-footer">输入任意账号和密码即可</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Route } from "vue-router";
import { UserModule } from "@/store/modules/user";
import { getRole } from "@/utils/auth";

import { routes } from "@/router/index";
import { getPermissionRoutes } from "@/utils/permission";

@Component({})
export default class Login extends Vue {
  form = {
    password: "123456",
    name: "admin"
  };
  FormData: any;
  loginRules = {
    name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };

  login() {
    this.FormData = this.$refs["form"];

    this.FormData.validate(async (valid: Boolean) => {
      if (valid) {
        UserModule.loginuswer();
        let data = {
          id: 1,
          name: "超级管理员",
          stuNo: "110",
          bsId: 1,
          userName: "admin",
          phone: "13611921479",
          roleList: [{ id: 7, name: "超级管理员", tag: 0, type: 0 }]
        };
        let role: string = JSON.stringify(data.roleList[0]);
        // 存储菜单
        await UserModule.setttings(role);
        await UserModule.settingName(this.form.name);
        console.log(this.form.name, 999);
        let constroutes = getPermissionRoutes(routes, getRole("role").name); // 如果要使用默认参数 需要指定为undefined 不使用默认参数传null或实际值

        await UserModule.settingRoute(constroutes);

        // 设置用户信息
        this.$router.push({ path: "/home" });
      }
    });
  }
}
</script>


<style lang="scss" scoped>
.login-container {
  padding: 200px 24px;
}
.login-wrapper {
}
.title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 42px;
}

.login-footer {
  margin-top: 24px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
}
.login-button {
  width: 100px;
  text-align: center;
  margin: auto;
  margin-top: 24px;
}
</style>

