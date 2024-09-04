import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View  } from 'react-native-web';

const Project4 = () => {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={{alignItems:'center', marginTop:20}}>
      <Text>You've pressed the button: {pressCount} time(s)</Text>    
      <Button 
      title={`Pressed ${pressCount} time(s)`}
      onPress={()=>setPressCount(pressCount+1)}
      />
    </View>
  );
};

export default Project4; 