import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

 
export function ItemGit({name, avatar_url ,onPress }) {
  return (
    
    <View style={ styles.container}>
      <Image style={styles.tinyLogo} source={{uri:avatar_url}} />
      <Text style={styles.nickname}>{name}</Text>
      <View style={styles.separador}></View>  
      

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={ onPress } >
            <Ionicons name="ios-eye-outline" size={25} color={Theme.colors.gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        width: '100%',
        height: 70,
        backgroundColor:'#DEE4E4',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
});