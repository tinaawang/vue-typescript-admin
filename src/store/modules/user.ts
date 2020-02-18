import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";

import {
  setUser,
  clearUser,
  setToken,
  clearToken,
  clearMenus,
  setMenus,
  setRole,
  clearRole,
  getRole,
  setUsername,
  clearUsername
} from "@/utils/auth";

import router from "@/router";

import store from "@/store";

export interface IUserState {
  token: any;
  isCollapse: boolean;
  routes: any;
  role: any;
  name: string;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements IUserState {
  public token = null;
  public isCollapse = false;
  public routes = null;
  public role = "";
  public name = "";

  @Mutation
  private CLEAR_USER() {
    clearUser();
    clearMenus();
  }
  @Mutation
  private SET_TOKEN(payload: any) {
    this.token = payload;
    setToken(payload);
  }
  @Mutation
  private SET_NAME(payload: string) {
    this.name = payload;
    setUsername(payload);
  }

  @Mutation
  private CLEAR_NAME() {
    this.token = null;
    clearUsername();
  }

  @Mutation
  private CLEAR_TOKEN() {
    this.token = null;
    clearToken();
  }
  @Mutation
  private CLEAR_ROLE() {
    this.role = "";
    clearRole();
  }
  @Mutation
  private SET_COLLAPSE() {
    this.isCollapse = !this.isCollapse;
  }
  @Mutation
  private SET_ROUTES(payload: any) {
    this.routes = payload;
    let params: any = JSON.stringify(payload);
    setMenus(params);
  }
  @Mutation
  private SET_ROLE(payload: any) {
    this.role = payload;
    setRole(payload);
  }

  @Action
  public loginuswer() {
    // 如果登录成功 判断是否有多个角色
    let accessToken = "123456";
    this.SET_TOKEN(accessToken);
  }

  @Action
  public setttings(role: string) {
    console.log("setting");
    // 存储角色
    this.SET_ROLE(role);
  }

  @Action
  public settingRoute(constroutes: any) {
    this.SET_ROUTES(constroutes);
  }

  @Action
  public settingName(name: string) {
    this.SET_NAME(name);
  }
}

export const UserModule = getModule(User);
