import CryptoJS from 'crypto-js';

export const encryptString = (str: string): string =>
  CryptoJS.MD5(str).toString();
