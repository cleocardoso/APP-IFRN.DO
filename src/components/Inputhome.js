import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export function Inputhome({ placeholder, onPress, onChangeText, ...rest }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder={placeholder}
        {...rest}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="right" size={20} color='#808080' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    width: 330,
    height: 65,
    left: 15,
    top: -70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  inputText: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    fontSize: 17,
    borderRadius: 5,

  },
  button: {
    padding: 15,
    backgroundColor: '#FFFFFF',

  }
});