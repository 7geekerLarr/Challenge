
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from '../Screens/About';

const Stack = createNativeStackNavigator();

export function AboutStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="About" component={About} options={{ title:"Acerca de"}} />
  </Stack.Navigator>
  );
}
