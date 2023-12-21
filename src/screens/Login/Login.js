import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground style={styles.backgroundImage}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Images/BrandAssets.jpg')}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="envelope" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              placeholderTextColor="#b3b3b3"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name="lock" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#b3b3b3"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={styles.forgotPasswordText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgb(16 16 16)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
  },
  icon: {
    fontSize: 20,
    color: '#333',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    color: '#333',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#e50914',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {},
  forgotPasswordText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default Login;
