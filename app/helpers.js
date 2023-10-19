import CryptoJS from "react-native-crypto-js";

// in real life project, this key is server returned userId if user success biometrics login
let getSecretKeyFake = "88888888";

// Encrypt
export const handleEncrypt = (note) => {
  let ciphertext = CryptoJS.AES.encrypt(note, getSecretKeyFake).toString();
  return ciphertext;
}

// Decrypt  
export const handleDecrypt = (ciphertext) => {
  let bytes = CryptoJS.AES.decrypt(ciphertext, getSecretKeyFake);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}