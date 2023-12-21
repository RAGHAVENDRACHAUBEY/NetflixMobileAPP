import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {myColors} from '../../utils/Theme';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} hidden />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48',
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    backgroundColor: 'rgb(16 16 16)',
  },
});
