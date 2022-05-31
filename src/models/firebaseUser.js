import database from '@react-native-firebase/database';

const FirebaseUser = {
  getLogin() {},
  postLogin(user) {
    try {
      const result = database()
        .ref('/user/')
        .once('value')
        .then(snapshot => {
          const datas = Object.values(snapshot.val());
          const result = datas.filter(data => {
            return (
              data.password === user.data.password &&
              data.email === user.data.email
            );
          });
          return result;
        });

      return result;
    } catch (error) {
      return error;
    }
  },
  getRegister() {},
  postRegister(user) {
    try {
      database().ref(`/user/${user.id}`).set({
        id: user.id,
        username: user.data.username,
        email: user.data.email,
        password: user.data.password,
        room: '',
      });
      return true;
    } catch (error) {
      return error;
    }
  },
  getUserById(user) {},
  getAllUser() {},
};
export default FirebaseUser;
