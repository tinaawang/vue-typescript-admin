import storage from "./storage";

const tokenKey = "token";
const userKey = "user";
const menuKey = "menus";
const roleKey = "role";
const nameKey = "name";
export function getToken(tokenKey: any) {
  return storage.getSessionStorage(tokenKey);
}

export function setToken(token: any) {
  return storage.setSessionStorage(tokenKey, token);
}

export function clearToken() {
  return storage.removeSessionStorage(tokenKey);
}
export function getUsername() {
  return storage.getSessionStorage(nameKey) || "";
}

export function setUsername(name: string) {
  return storage.setSessionStorage(nameKey, name);
}

export function clearUsername() {
  return storage.removeSessionStorage(nameKey);
}

export function getUser() {
  let a: any = storage.getSessionStorage(userKey);
  return JSON.parse(a);
}

export function setUser(user: any) {
  return storage.setSessionStorage(userKey, user);
}

export function clearUser() {
  return storage.removeSessionStorage(userKey);
}

export function getMenus() {
  let a: any = storage.getSessionStorage(menuKey);
  return JSON.parse(a);
}

export function setMenus(menu: any) {
  return storage.setSessionStorage(menuKey, menu);
}

export function clearMenus() {
  return storage.removeSessionStorage(menuKey);
}

export function getRole(roleKey: any) {
  let a: any = storage.getSessionStorage(roleKey);
  return JSON.parse(a);
}

export function setRole(role: any) {
  return storage.setSessionStorage(roleKey, role);
}

export function clearRole() {
  console.log("rolerole");
  return storage.removeSessionStorage(roleKey);
}
