import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const ChatList = ({props}) => {
  const {navigation} = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('chat-view')}>
      <View style={styles.chatList}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'red',
            borderRadius: 100,
          }}></View>
        <Text style={styles.textChat}>Fais</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
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
export default ChatList;
