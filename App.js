import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
import Jogo from "./screens/Jogo";
=======

import Comanda from "./screens/Comanda";
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "./screens/Produtos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
<<<<<<< HEAD
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Produtos" component={Produtos} />
=======
        <Stack.Screen name="Login" component={Login} />      
        <Stack.Screen name="Jogador" component={Comanda}/>
        
>>>>>>> 2f9a0792c025c7fc30ba09da91f2d434ad0c2fcc
      </Stack.Navigator>
    </NavigationContainer>
  );
}
