import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import Quiz from "../screens/quiz/Quiz";
import Results from "../screens/results/Results";
import navigationScreenNames from "../utils/contants/navigationScreenNames";

const Stack = createStackNavigator();
const defaultConfig = {
  headerShown: false,
};
function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={defaultConfig}
      initialRouteName={navigationScreenNames.home}
    >
      <Stack.Screen name={navigationScreenNames.home} component={Home} />
      <Stack.Screen name={navigationScreenNames.quiz} component={Quiz} />
      <Stack.Screen name={navigationScreenNames.results} component={Results} />
    </Stack.Navigator>
  );
}

export default MainStack;
