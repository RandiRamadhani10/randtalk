import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import User from '../../../models/user';
const ChatGet = () => {
  return (
    <>
      <View style={styles.textList}>
        <View>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() => {
              const set = User.login({
                username: 'randiRamadhani',
                email: 'test@mail.com',
                password: 'secret',
              });
              console.log(set);
            }}>
            <Text style={styles.title}>Gelut Des</Text>
          </TouchableOpacity>
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
