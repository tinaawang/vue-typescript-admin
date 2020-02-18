const storage = {
  // localStorage
  getLocalStorage(key: any) {
    return localStorage.getItem(key);
  },

  setLocalStorage(key: any, value: any) {
    localStorage.setItem(key, value);
  },

  removeLocalStorage(key: any) {
    localStorage.removeItem(key);
  },

  clearLocalStorage() {
    localStorage.clear();
  },

  // sessionStorage
  getSessionStorage(key: any) {
    return sessionStorage.getItem(key);
  },

  setSessionStorage(key: any, value: any) {
    sessionStorage.setItem(key, value);
  },

  removeSessionStorage(key: any) {
    sessionStorage.removeItem(key);
  },

  clearSessionStorage() {
    sessionStorage.clear();
  }
};

export default storage;
