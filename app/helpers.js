import CryptoJS from "react-native-crypto-js";

// in real life project, this key is server returned userId if user success biometrics login
// Encrypt
export const handleEncrypt = (note, secretKey) => {
  let ciphertext = CryptoJS.AES.encrypt(note, secretKey).toString();
  return ciphertext;
}

// Decrypt  
export const handleDecrypt = (ciphertext, secretKey) => {
  let bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

export const handleHash = (val) => {
  let hashedText = CryptoJS.MD5(val).toString();
  return hashedText;
}