import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';

import CheckBoxS from '@react-native-community/checkbox';
import CheckBox from '../components/CheckBox';


export default function ItemTarefa(props) {
 
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox onPress={props.onChecked} isChecked={props.checked}/>
      </View>
      <View>
        <Text style={styles.textTarefa}>{props.tarefa}</Text>
      </View>
      <TouchableOpacity onPress={props.apagar}>
        <Icon3 name="delete" size={28} color="black" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 65,
    top: 10,
    left:-1,
    padding: 10,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#B6B4B4',
    margin: -1,
    flex: 1,
  },
  textTarefa: {
    fontSize: 18,
    left:-80,
    
    
  },
  IconStyle: {
    left: 10,
    fontSize: 30,
    color: "black",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    top:10,
    color:'#1DB863',
    
  },
  checkbox: {
    alignSelf: "center",
    color:'#1DB863',
    
  },

})