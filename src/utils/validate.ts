/**
 * 验证手机号
 * @param {string} str
 * @returns {Boolean}
 */
export function checkPhone(phone: string) {
  if (!/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  }

  return true;
}

/**
 * 验证实收是字符串
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str: any) {
  if (typeof str === "string" || str instanceof String) {
    return true;
  }
  return false;
}

/**
 * 验证是否是数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg: any) {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

/**
 * 验证是否是字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str: string) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 验证是否都是小写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str: string) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 验证是否都是大写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str: string) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 手机号脱敏显示
 * @param {string} str
 * @returns {string}
 */
export function fillPhone(str: string) {
  let pat = /(\d{3})\d*(\d{4})/;
  let b = str.replace(pat, "$1****$2");
  return b;
}
