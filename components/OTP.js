import React, {
  RefObject,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

var {height, width} = Dimensions.get('window');

const OTP = ({navigation}) => {
  const [loginSuccess, setLoginSuccess] = useState('');
  const [timer, setTimer] = useState(30);
  const timeOutCallback = useCallback(
    () => setTimer(currTimer => currTimer - 1),
    [],
  );
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  console.log(timer);

  const resetTimer = function () {
    if (!timer) {
      setTimer(30);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          justifyContent: 'center',
          width: '100%',
          height: (height * 80) / 100 / 2 + 10,
          marginBottom: 20,
        }}
        source={{
          uri: 'https://www.bighit.fans/assets/images/webSlide8.png',
        }}></Image>
      {loginSuccess.length === 0 ? (
        <View style={{}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            Enter 6 digit OTP sent on
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{color: '#555'}}>+91 99889 76786 </Text>
            <TouchableOpacity>
              <Text style={{color: '#87CEEB'}}>Change</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: 15,
            }}>
            <TextInput
              style={styles.textInput}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              maxLength={1}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              maxLength={1}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={styles.textInput}
            onPress={() => {
              setLoginSuccess('success');
              setTimeout(() => {
                setLoginSuccess('Gif');
              }, 1000);
              setTimeout(() => {
                navigation.navigate('Home');
              }, 4000);
            }}>
            <Text style={{color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
          <Text style={{color: '#555', alignSelf: 'center', marginTop: 15}}>
            Resend OTP <Text>{timer}s</Text>
          </Text>
        </View>
      ) : (
        <View style={{}}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
              marginVertical: 30,
            }}>
            Login Success!
          </Text>
          {loginSuccess === 'Gif' ? (
            <Image
              source={require('./assets/success.gif')}
              style={{
                alignSelf: 'center',
                height: Dimensions.get('window').width / 2,
                width: Dimensions.get('window').width / 2,
              }}
            />
          ) : null}
        </View>
      )}
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: 50,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#87CEEB',
    color: '#000',
    textAlign: 'center',
    marginRight: 10,
  },
});
