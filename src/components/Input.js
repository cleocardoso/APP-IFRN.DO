import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

import AntDesign from 'react-native-vector-icons/AntDesign'; 

export function Input({placeholder,onPress,onChangeText}) {
  return (
    <View style={ styles.container}>
      <TextInput style={styles.inputText} placeholder={placeholder}
        
        onChangeText={onChangeText}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        width: 340,
        height: 60,
        left:-5,
        top:-50,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius:5
        
    },
    inputText:{
      flex: 1,
      height: '100%',
      backgroundColor: '#FFFFFF',
      paddingLeft: 20, 
      fontSize: 17,
      borderRadius: 10,
    },
    
});