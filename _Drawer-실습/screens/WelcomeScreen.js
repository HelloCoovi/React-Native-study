import { View, Button, Text } from "react-native";

function WelcomeScreen({ navigation, route }) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>This is WelcomeScreen!</Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default WelcomeScreen;
