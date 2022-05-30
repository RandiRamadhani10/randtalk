import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatGet from './Components/ChatGet';
import ChatPost from './Components/ChatPost';

const screen = Dimensions.get('screen');

const ChatView = () => {
  const [email, setEmail] = useState();
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Fais</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ChatGet />
          <ChatPost />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.send}>
        <TextInput
          testID="email-input"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Chat"
          keyboardType="default"
        />
        <TouchableOpacity style={{marginLeft: 10}}>
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
});
export default ChatView;
