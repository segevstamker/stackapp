import{createNativeStackNavigator}from '@react-navigation/native-stack'

//IMPORT THE STACK COMPONENTS
import Categories from './Categories'
import Products from './Products'
import ProductsInfo from './PriductInfo'

const AppStackNavigator=createNativeStackNavigator();

export const AppStack =() => {
    return(
        <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name='categories' component={Categories} />
            <AppStackNavigator.Screen name='products' component={Products} />
            <AppStackNavigator.Screen name='productsInfo' component={ProductsInfo} />
        </AppStackNavigator.Navigator>
    )
}