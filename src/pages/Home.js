import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, View, FlatList, Keyboard, ScrollView } from 'react-native';
import { Inputhome } from '../components/Inputhome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemTarefa from '../components/ItemTarefa';




export function Home({ navigation, route }) {
    //console.log(route.params)
    const keyAsyncStorage = "@IFRNDO:tarefas1";

    const [tarefas, setTarefas] = useState([]);
    const [tarefa, setTarefa] = useState('');
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false)

    async function clear() {
        await AsyncStorage.clear();
    }

    async function salvarTarefa() {
        const data = {
            id: String(new Date().getTime()),
            tarefa: tarefa,
            checked: false
        }
        const vetData = [...tarefas, data]
      
        try {
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
        } catch (error) {
            Alert.alert("Erro ao salvar Tarefas");
        }

        Keyboard.dismiss();

        setTarefa("");
        loadData();

    }
    async function deletar(id) {
        const newData = tarefas.filter(item => item.id != id);
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));
      
        await loadData();
    }

    async function setChecked(index){
        let item = tarefas[index];
        item = {
            ...item,
            checked: !item.checked
        } 
        tarefas[index] = item
        console.log('item', item)
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(tarefas));
        await loadData()
    }

    async function loadData() {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const dadosTarefas = await JSON.parse(retorno)
            //console.log('loadData -> ', dadosTarefas);
            setTarefas(dadosTarefas || []);
        } catch (error) {
            Alert.alert("Erro na leitura  das tarefasss");
        }
    }

    useEffect(() => {
        //clear()/
        loadData();
    }, []);



    return (

        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>IFRN.DO </Text>
                <Text style={styles.title1}>Você tem</Text><Text style={styles.title3}> {tarefas.length} tarefas </Text>
                <Inputhome placeholder="Adicionar Tarefa" value={tarefa}
                    onChangeText={(e) => setTarefa(e)} onPress={salvarTarefa} />
            </View>
            <View style={styles.list}>
                <ScrollView>

                    <FlatList data={tarefas}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <ItemTarefa tarefa={item.tarefa} onChecked={() => setChecked(index)} checked={item.checked} apagar={() => deletar(item.id)} >

                            </ItemTarefa>
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