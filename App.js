import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo_head.png')} style={styles.logo} />
      <Text style={styles.slogan}>App under construction 🛠</Text>
      <Button title="Start" color={'#fdd10c'} />
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
    height: '89px',
    width: '396px',
  },
  slogan: {
    marginVertical: '5em',
  },
});
