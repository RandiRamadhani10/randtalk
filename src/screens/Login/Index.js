import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import User from '../../models/user';
import {setLocal, getLocal} from '../../models/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FirebaseUser from '../../models/firebaseUser';
const screen = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dataLocal, setDataLocal] = useState({login: false});

  const buttonLogin = async () => {
    const result = await FirebaseUser.postLogin({
      email: email,
      password: password,
    });

    if (result.length > 0) {
      navigation.replace('bottom-tab');
    } else {
      Alert.alert('login gagal');
    }
  };
  useEffect(() => {
    getLocal('user').then(value => {
      setDataLocal(value);
    });
  }, []);
  useEffect(() => {
    dataLocal.login ? navigation.replace('bottom-tab') : '';
  }, [dataLocal]);
  return (
    <View style={styles.parent}>
      {/* <Image
        style={styles.img}
        source={require('../../assets/logoGedebook.png')}
      /> */}
      <Text style={styles.text}>LOGIN</Text>
      <KeyboardAvoidingView
        style={{width: screen.width * 0.8, alignItems: 'center'}}>
        <TextInput
          testID="email-input"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="default"
        />
        <TextInput
          testID="password-input"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          keyboardType="default"
        />
        <TouchableOpacity
          testID="button-login"
          style={styles.btn}
          onPress={() => buttonLogin()}>
          <Text style={{color: 'white', fontSize: 20}}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={{marginTop: 30}}>Dont have account ?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('register');
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  img: {width: screen.width * 0.7, height: screen.width * 0.7},
  text: {fontSize: 20, color: 'black', fontWeight: 'bold'},
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    padding: 10,
    margin: 5,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    width: screen.width * 0.3,
  },
});
export default Login;
