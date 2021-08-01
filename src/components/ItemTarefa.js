import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';

import CheckBox from '@react-native-community/checkbox';

export default function ItemTarefa(props) {
  console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={true}
          onValueChange={() => {}}
          style={styles.checkbox}
        />
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
    width: 340,
    height: 65,
    top: 10,
    padding: 10,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#B6B4B4',
    borderRadius: 5,
    margin: 10,
    flex: 1,
  },
  textTarefa: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  IconStyle: {
    left: 10,
    fontSize: 30,
    color: "black",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

})