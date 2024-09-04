import React from "react";
import { View, TouchableOpacity,Text, StyleSheet } from "react-native-web";

const Button = (props) =>(
    <TouchableOpacity onPress={props.onPress} 
        style={{
            backgroundColor: '#ff637c',
            alignSelf:'center',
            padding:10,
            margin: 10,
            ...props.buttonStyle,
        }}>
        <Text style={{color:'#fff'}}>{props.text}</Text>
    </TouchableOpacity>
);

const Project3 = ()=>{
    return(
        <View style={MyStyle.container}>
            <Button text="Say hello" onPress={()=>alert("Hello!")}/>
            <Button
            text = 'Say goodbye'
            onPress={()=>alert('Goodbye!')}
            buttonStyle={{backgroundColor:'#4dc2c2'}}
            />
        </View>
    )
}

const MyStyle =StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
    },
  })

  export default Project3; 