
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screens/Home';
import Post from '../Screens/Post';
import CommentAdd from '../Screens/CommentAdd';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ title:"Inicio"}}/>
    <Stack.Screen name="Post" component={Post} options={{ title:"Post"}}/>
    <Stack.Screen name="CommentAdd" component={CommentAdd} options={{ title:"Comentario (Nuevo)"}}/>
  </Stack.Navigator>
  );
}
