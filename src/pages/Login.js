import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, Image, View, FlatList, Keyboard, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input } from '../components/Input';
import { ButtonEntrar } from '../components/ButtonEntrar';
import GlobalStyles from '../styles/GlobalStyles';


export function Login() {

  return (

    <View style={GlobalStyles.screenContainer}>
      <Image style={styles.imagem} source={require('../imgs/IF.png')} />
      <Text style={GlobalStyles.title}>IFRN.DO</Text>
      <Input placeholder="Login" keyboardType='numeric' />
      <Input placeholder="Senha" />
      <ButtonEntrar placeholder="Digite o nickname do usuário" />
    </View>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  imagem: {
    width: 280,
    height: 200,
    top:-30

  }

})