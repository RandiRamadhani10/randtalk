import AsyncStorage from '@react-native-async-storage/async-storage';
const Local = {
  setLocal(data) {
    const storeData = async value => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('user', value);
      } catch (e) {
        console.log(e);
      }
    };
    return storeData(data);
  },
  getLocal(key) {
    const getData = async value => {
      try {
        const jsonValue = await AsyncStorage.getItem(`${value}`);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log(e);
      }
    };
    return getData(key);
  },
};
export default Local;
