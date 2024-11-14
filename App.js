import { NavigationContainer } from "@react-navigation/native";

import Categories from "./src/Categories";
import { AppStack } from "./src/Navigation";

export default function App() {
  return(
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}