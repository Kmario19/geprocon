import HomeScreen from './components/Home';
import UnitsScreen from './components/Units/List';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Units" component={UnitsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
