import { createStackNavigator } from "@react-navigation/stack";
import Example from "../screens/Example";
import SecondScreen from "../screens/SecondScreen";
import Home from "../screens/Home.js";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Inbox from "../screens/Inbox";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Inbox" component={Inbox} />
    </Stack.Navigator>
  );
}
