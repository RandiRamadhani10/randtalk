import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import database from '@react-native-firebase/database';
import FirebaseUser from './firebaseUser';

const User = {
  login(data) {
    const userData = {
      data: {
        email: data.email,
        password: data.password,
      },
    };
    return FirebaseUser.postLogin(userData);
  },
  register(data) {
    const userData = {
      id: uuidv4(),
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    };
    return FirebaseUser.postRegister(userData);
  },
};

export default User;
