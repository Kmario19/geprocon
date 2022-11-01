import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import LaunchPad from '../../components/LaunchPad';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo_head.png')}
        style={styles.logo}
      />
      <LaunchPad navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '10%',
    width: '90%',
    marginVertical: 10,
  },
  slogan: {
    marginVertical: '5em',
  },
});
