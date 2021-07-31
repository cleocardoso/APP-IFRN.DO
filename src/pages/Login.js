import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, Image, View, FlatList, Keyboard, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Input } from '../components/Input';
import { ButtonEntrar } from '../components/ButtonEntrar';
import GlobalStyles from '../styles/GlobalStyles';
import api from '../services/Api';


export function Login({ navigation}) {
  const [matricula,setMatricula]= useState("");
  const [password,setPassword]= useState("");



  async function handleLogin(){//funcao para realizar chamada ao suap
    var params = new URLSearchParams();
    params.append('username', matricula);
    params.append('password', password);
    try{
      const response = await api.post('autenticacao/token/', params);
      //console.log("Token -->",response.data);
      const { token } = response.data;
      //console.log("Token -->",token);
      const responseUser = await api.get('/minhas-informacoes/meus-dados/', {
         headers:{
           'authorization':'jwt' + token,
           'Accept':'application/json',
           'Content-Type': 'application/json'
         }
      });
      console.log("DADOS -->",responseUser.data);
    }catch{
      Alert.alert("Erro na autenticação");
    }
     
  }

  return (

    <View style={GlobalStyles.screenContainer}>
      <Image style={styles.imagem} source={require('../imgs/IF.png')} />
      <Text style={GlobalStyles.title}>IFRN.DO</Text>
      <Input placeholder="Matricula" keyboardType='numeric' onChangeText={x=> setMatricula(x)} />
      <Input placeholder="Senha" secureTextEntry={true} onChangeText={x => setPassword(x)} />
    <ButtonEntrar onPress={handleLogin} />
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