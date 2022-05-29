import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
//import HomeScreen from "../Screens/HomeScreen"
//import AboutScreen from "../Screens/AboutScreen"
import { HomeStack } from "./HomeStack";
import { AboutStack } from "./AboutStack";
import { SYSTEMCOLORS } from "../Constants/ColorSystem";
const Tab = createBottomTabNavigator();

export function NavigationApp() {
  return (
    <Tab.Navigator
    initialRouteName="HomeScreen"  
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: SYSTEMCOLORS.TAB_ACTIVETINTCOLOR,
      tabBarInactiveTintColor: SYSTEMCOLORS.TAB_INACTIVE_COLOR,
      tabBarStyle:{
        backgroundColor:SYSTEMCOLORS.TAB_STYLES,
        height:50,
      }, 
     
      tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
    })}          
    
    >
      <Tab.Screen
        name={"HomeScreen"}
        component={HomeStack}
        options={{ title: "Inicio" }}       
      />
      <Tab.Screen
        name={"AboutScreen"}
        component={AboutStack}
        options={{ title: "Acerca de" }}       
      />      
    </Tab.Navigator>
  );
}

function screenOptions(route, color){
  let iconName;
  switch (route.name){
      case "HomeScreen":
          iconName ="home"
          break;     
      case "AboutScreen":
          iconName ="compass"
          break;    
      default:
          break; 
      }        
          return(
              <Icon type="material-community" name={iconName} size={40} color={color}/>
          )            
  }
