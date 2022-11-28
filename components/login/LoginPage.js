import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  PermissionsAndroid,
  ActivityIndicator,
  Button,
  Modal,
  Pressable,
  Alert,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import {NavigationContainer} from '@react-navigation/native';
// import Dialog from 'react-native-dialog';
// import {OTP} from 'react-native-otp-form';

const LoginPage = ({navigation}) => {
  const [signIn, setSignIn] = useState({
    mobile: '',
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.logocontainer2}> */}
      <Image
        style={{
          justifyContent: 'center',
          width: '100%',
          height: 350,
          marginBottom: 20,
        }}
        source={{
          uri: 'https://www.bighit.fans/assets/images/webSlide8.png',
        }}></Image>
      {/* </View> */}
      <View style={{justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput
            style={styles.inputs}
            label="Moblie"
            placeholder="Moblie"
            keyboardType="phone-pad"
            placeholderTextColor="#000"
            color="#000"
            value={signIn.mobile}
            onChangeText={value => setSignIn({...signIn, mobile: value})}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => navigation.navigate('OTP')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  inputContainer: {
    borderColor: '#DCDCDC',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: 150,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});

export default LoginPage;
