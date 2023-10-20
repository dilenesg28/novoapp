import { NavigationContainer } from "@react-navigation/native";
import Jogo from "./screens/Jogo";
import Login from "./screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "./screens/Produtos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

