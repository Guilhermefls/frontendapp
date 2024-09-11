import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Principal from './telas/principal.js'
import Detalhes from './telas/detalhes.js'
import Adicionar from './telas/adicionar.js'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Adicionar" component={Adicionar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}