import database from '@react-native-firebase/database';
import {v4 as uuidv4} from 'uuid';
import {getLocal, setLocal} from './localStorage';
import IdUser from './data';
const FirebaseUser = {
  postLogin(user) {
    try {
      const result = database()
        .ref('/user/')
        .once('value')
        .then(snapshot => {
          const datas = Object.values(snapshot.val());
          const result = datas.filter(data => {
            return data.password === user.password && data.email === user.email;
          });
          const data = {id: result[0].id, login: true};
          IdUser.unshift(data);
          setLocal({id: result[0].id, login: true});
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
  getUserById(user) {
    database()
      .ref(`/users/${user}`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });
  },
  getAllUser(idUser) {
    try {
      const result = database()
        .ref('/user/')
        .once('value')
        .then(snapshot => {
          const datas = Object.values(snapshot.val());
          const result = datas.filter(data => {
            return data.id !== idUser;
          });
          return result;
        });
      return result;
    } catch (error) {
      return error;
    }
  },

  async onMessage(id, msg) {
    try {
      const result = database()
        .ref(`/user/${id}/room/`)
        .once('value')
        .then(snapshot => {
          return Object.values(snapshot.val());
        });
      result.then(value => {
        console.log(value + ' aku value');
        if (value == null || value.length < 1) {
          const uuid = uuidv4();
          this.createRoom(uuid, IdUser[0].id, msg);
          this.addUserRoom(uuid, id, IdUser[0].id);
          this.addMyRoom(uuid, id, IdUser[0].id);
        } else {
          const res = value.filter(data => {
            return data.idUser1 == IdUser[0].id;
          });
          if (res.length > 0) {
            const uuid = uuidv4();
            this.addMsg(IdUser[0].id, res[0].idRoom, msg);
          } else {
            const uuid = uuidv4();
            this.createRoom(uuid, IdUser[0].id, msg);
            this.addUserRoom(uuid, id, IdUser[0].id);
            this.addMyRoom(uuid, id, IdUser[0].id);
          }
        }
      });
      return true;
    } catch (e) {
      console.log(e);
    }
  },
  addMsg(myId, idRoom, msg) {
    database()
      .ref(`/room/${idRoom}/`)
      .push()
      .set({idUser: myId, msg: msg})
      .then(() => {
        console.log('msg send');
      });
  },
  createRoom(idRoom, myId, msg) {
    database()
      .ref(`/room/${idRoom}/`)
      .push()
      .set({idUser: myId, msg: msg})
      .then(() => {
        console.log('room create');
      });
  },
  addMyRoom(idRoom, idUser, myId) {
    database()
      .ref(`/user/${myId}/room/${idUser}`)
      .set({idRoom: idRoom, idUser1: idUser, idUser2: myId})
      .then(() => {
        console.log('room user 1');
      });
  },
  addUserRoom(idRoom, idUser, myId) {
    database()
      .ref(`/user/${idUser}/room/${myId}`)
      .set({idRoom: idRoom, idUser1: myId, idUser2: idUser})
      .then(() => {
        console.log('room user 2');
      });
  },
  getAllmsg(id) {
    database()
      .ref(`/user/${id}/room/${IdUser[0].id}`)
      .on('value', snapshot => {
        database()
          .ref(`/room/${snapshot.val().idRoom}`)
          .on('value', snapshot => {
            const result = [];
            snapshot.forEach(function (childSnapshot) {
              var childData = childSnapshot.val();
              result.push(childData);
            });
            return result;
          });
      });
  },
};

export default FirebaseUser;
