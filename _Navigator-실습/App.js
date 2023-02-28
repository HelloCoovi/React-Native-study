import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
        }}
      >
        <BottomTab.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{}}
        />
        <BottomTab.Screen name="user" component={UserScreen} options={{}} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
