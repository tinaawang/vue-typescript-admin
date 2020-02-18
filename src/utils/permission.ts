import { RouteConfig } from "vue-router";

export const getPermissionRoutes = (
  routes: RouteConfig[],
  roleName: string
) => {
  let res: any[] = [];
  routes.forEach(route => {
    let r = { ...route };
    if (hasPermission(roleName, r)) {
      if (r.children) {
        r.children = getPermissionRoutes(r.children, roleName);
      }
      res.push(r);
    }
  });
  return res;
};
const hasPermission = (roleName: string, route: RouteConfig) => {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roleName);
  } else {
    return true;
  }
};
