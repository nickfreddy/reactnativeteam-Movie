import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getHeaders() {
  const token = await AsyncStorage.getItem('TOKEN');

  return {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };
}

export async function getToken() {
  return await AsyncStorage.getItem('TOKEN');
}

export async function getUserId() {
  return await AsyncStorage.getItem('USER_ID');
}

export async function saveToken(token) {
  AsyncStorage.setItem('TOKEN', token);
}

export async function saveUserId(_id) {
  AsyncStorage.setItem('USER_ID', _id);
}

export async function removeToken() {
  AsyncStorage.removeItem('TOKEN');
}

export async function removeUserId() {
  AsyncStorage.removeItem('USER_ID');
}
