import React from "react";
import { View,Text,StyleSheet } from 'react-native';

const ProductsInfo =() => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Product Info</Text>
            </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#00cc99',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'#ffffff',
        fontSize:40,
        fontWeight:"200",
    },
})

export default ProductsInfo;