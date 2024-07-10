import CryptoJS from 'crypto-js';

// const secretPass = process.env.REACT_APP_SECRET_KEY;
const secretPass = process.env.EXPO_PUBLIC_GATEWAY_SECRET_KEY;

export const encryptData = (data) => {
  try {
    const encryptData = CryptoJS.AES.encrypt(JSON.stringify(data), secretPass).toString();
    // const encryptData = CryptoJS.AES.encrypt(data, secretPass);

    return encryptData;
    // return 1;
  } catch (error) {
    console.log(error);
  }
};

export const decryptData = (data) => {
  try {
    // const bytes = CryptoJS.AES.decrypt(data, secretPass);
    // console.log('getting data to decrypt');
    // console.log(data);
    // console.log('--------getting type of data to decrypt-------------------');
    // console.log(typeof data);
    const bytes = CryptoJS.AES.decrypt(data, secretPass);

    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (typeof decryptedData === 'string') {
      const parsedData = JSON.parse(decryptedData);
      return parsedData;
    } else {
      return decryptedData;
    }
  } catch (error) {
    console.log('gets an error');
    // console.log(error);
  }
};
