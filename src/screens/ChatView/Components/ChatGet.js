import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ChatGet = () => {
  return (
    <>
      <View style={styles.textList}>
        <View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.title}>Gelut Des</Text>
          </View>
          <Text>10.10pm</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textList: {
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
export default ChatGet;
