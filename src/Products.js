import React from "react";
import { View,Text,StyleSheet } from 'react-native';

const Products =(props) => {
    console.log(props);
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{props.route.params.name}</Text>
                <TouchableOpacity 
                onPress={()=>{
                    props.navigation.navigate("productsInfo")
                }}
                style ={styles.btn}>
                    <Text style ={styles.btn_text}>GO TO PRODUCTS INFO</Text>
                </TouchableOpacity>
                </View>
        )
    }

const styles=StyleSheet.create({
    btn:{
        width:'100%',
        alignItems:'center',
        paddingVertical:12,
        borderRadius:12,
        backgroundColor:'#000000'
    },
    btn_text:{color:'#ffffff',
    fontSize:20,
    fontWeight:'200'
},
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

export default Products;