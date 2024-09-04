import React from "react";
import { View, Button, TouchableOpacity,Text, StyleSheet } from "react-native-web";

const Project2 = ()=>{
    return(
        <View style={MyStyle.container}>
            <Button title="Button 1" onPress={()=>alert("Hello!")}/>
            <TouchableOpacity style={MyStyle.button} onPress={()=> alert("Hello 2")}>
                <Text style={MyStyle.text}>
                    Button 2
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const MyStyle =StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
    },
    button:{
      backgroundColor: 'blue',
      marginTop: 10,
      alignItems: 'center',
      padding: 10
    },
    text:{
        color: 'white',
        fontsize:18
    }

  })
  export default Project2; 