import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, Image, View, FlatList, Keyboard, Dimensions, ScrollView } from 'react-native';
import { Inputhome } from '../components/Inputhome';
import api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemTarefa from '../components/ItemTarefa';

export function Home({ navigation, route }) {
    //console.log(route.params)
    const keyAsyncStorage = "@agenda1:contatos";


    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState('');


    async function clear() {
        await AsyncStorage.clear();
    }

    async function salvarTarefa() {
        const data = {
            id: String(new Date().getTime()),
            tarefa: tarefa
        }
        const vetData = [...tarefas, data]
        try {
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
        } catch (error) {
            Alert.alert("Erro ao salvar contatos");
        }

        Keyboard.dismiss();

        setTarefa("");
        loadData();

    }
    async function deletar(id) {
        const newData = tarefas.filter(item => item.id != id);
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));

        //setContacts(newData); 
        await loadData()
    }

    async function loadData() {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const dadosTarefas = await JSON.parse(retorno)
            console.log('loadData -> ', dadosTarefas);
            setTarefas(dadosTarefas || []);
        } catch (error) {
            Alert.alert("Erro na leitura  das tarefasss");
        }
    }

    useEffect(() => {
        // clear()
        loadData();
    }, []);
    return (

        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>IFRN.DO </Text>
                <Text style={styles.title1}>Você tem</Text><Text style={styles.title3}> 2 tarefas </Text>
                <Inputhome placeholder="Adicionar Tarefa" value={tarefa}
                    onChangeText={(e) => setTarefa(e)} onPress={salvarTarefa} />
            </View>
            <View style={styles.list}>
                <ScrollView>
                    <FlatList data={tarefas}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ItemTarefa tarefa={item.tarefa} apagar={() => deletar(item.id)} />
                        )}
                    />
                </ScrollView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1, 
    },
    container: {
        width: 400,
        height: 200,
        backgroundColor: '#1DB863',
        bottom: 30,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        top: 50,
        left: 20,
        color: '#fff',
    },
    title1: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        color: '#fff',
        top: -1,
        left: -150,
        textAlign: 'right',
    },
    title3: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#fff',
        top: -50,
        left: -50,
        textAlign: 'right',
    },
    inputt: {
        top: 100,
        left: 10,
    },
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },


})