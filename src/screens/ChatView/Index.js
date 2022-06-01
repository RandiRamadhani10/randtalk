import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import IdUser from '../../models/data';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatGet from './Components/ChatGet';
import ChatPost from './Components/ChatPost';
import FirebaseUser from '../../models/firebaseUser';
import database from '@react-native-firebase/database';
const screen = Dimensions.get('screen');

const ChatView = ({route, navigation}) => {
  const scrollViewRef = useRef();
  const [allMsg, setAllMsg] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    database()
      .ref(`/user/${route.params.idUser}/room/${IdUser[0].id}`)
      .on('value', snapshot => {
        snapshot.val() == null
          ? ''
          : database()
              .ref(`/room/${snapshot.val().idRoom}`)
              .on('value', snapshot => {
                const result = [];
                snapshot.forEach(function (childSnapshot) {
                  var childData = childSnapshot.val();
                  result.push(childData);
                });
                setAllMsg(result);
              });
      });
  }, [setAllMsg]);
  console.log(allMsg);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>{route.params.username}</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          <View style={styles.parent}>
            {allMsg.map((data, index) => {
              return (
                <>
                  {data.idUser == IdUser[0].id ? (
                    <ChatPost props={{msg: data.msg}} />
                  ) : (
                    <ChatGet props={{msg: data.msg}} />
                  )}
                </>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.send}>
        <TextInput
          style={styles.input}
          onChangeText={setMsg}
          value={msg}
          placeholder="Chat"
          keyboardType="default"
        />
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => {
            FirebaseUser.onMessage(route.params.idUser, msg);
            setMsg('');
          }}>
          <Icon name="send" size={25} color="white" />
        </TouchableOpacity>
      </View>
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
    fontSize: 22,
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
  send: {
    width: screen.width,

    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
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

  textList: {
    backgroundColor: 'red',
    margin: 10,
    justifyContent: 'center',
  },
  title: {
    padding: 5,
    backgroundColor: 'blue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 18,
  },
  parent: {
    flex: 1,
    minHeight: screen.height * 0.8,
    justifyContent: 'flex-end',
  },
});
export default ChatView;
