import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
const screen = Dimensions.get('screen');
const Register = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.parent}>
      {/* <Image
        style={styles.img}
        source={require('../../assets/logoGedebook.png')}
      /> */}
      <Text style={styles.text}>REGISTER</Text>
      <KeyboardAvoidingView
        style={{width: screen.width * 0.8, alignItems: 'center'}}>
        <TextInput
          testID="fullname-input"
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Username"
          keyboardType="default"
        />
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
        <TouchableOpacity testID="button-register" style={styles.btn}>
          <Text style={{color: 'white', fontSize: 20}}>Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text style={{marginTop: 30}}>Already have account ?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  img: {width: screen.width * 0.3, height: screen.width * 0.3},
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
export default Register;
