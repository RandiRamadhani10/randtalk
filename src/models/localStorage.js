import AsyncStorage from '@react-native-async-storage/async-storage';
import IdUser from './data';
const setLocal = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getLocal = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    IdUser.unshift(JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : {login: false};
  } catch (e) {
    console.log(e);
  }
};
export {getLocal, setLocal};
