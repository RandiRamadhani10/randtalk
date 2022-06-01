import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import ChatList from './components/ChatList';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Local from '../../models/localStorage';
import FirebaseUser from '../../models/firebaseUser';
import {firebase} from '@react-native-firebase/database';
import {getLocal} from '../../models/localStorage';
import IdUser from '../../models/data';
const screen = Dimensions.get('screen');
const Home = ({navigation}) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    FirebaseUser.getAllUser(IdUser[0].id).then(value => {
      setUsers(value);
    });
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>RandTalk</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {users.map((data, index) => {
            return (
              <>
                <ChatList
                  key={index}
                  props={{
                    navigation: navigation,
                    data: {username: data.username, id: data.id},
                  }}
                />
              </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 32,
    color: 'white',
  },
  header: {
    width: screen.width,
    paddingTop: 20,
    height: 70,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
  textChat: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 10,
  },
});
export default Home;
