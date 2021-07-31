import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, Image, View, FlatList, Keyboard } from 'react-native';
import { Inputhome } from '../components/Inputhome';
import { ItemGit } from '../components/ItemGit';
import api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home({ navigation }) {

    return (

        <View style={styles.screenContainer}>

            <View style={styles.container}>
            <Text style={styles.title}>IFRN.DO </Text>
            <Text style={styles.title1}>Você tem</Text><Text style={styles.title3}> 2 tarefas </Text>
            </View>
            
            <Inputhome  placeholder="Adicionar uma tarefa" />





        </View>

    );
}

const styles = StyleSheet.create({
    screenContainer:{
        flex:1
    },
    container:{
        width:400,
        height:200,
        backgroundColor: '#1DB863',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        top:50,
        left:20,
        color: '#fff',
    },
    title1: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        color: '#fff',
        top:-1,
        left:-150,
        textAlign:'right',
    },
    title3: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#fff',
        top:-50,
        left:-50,
        textAlign:'right',
    },
    inputt:{
        top:100,
        left:10,
    }


})