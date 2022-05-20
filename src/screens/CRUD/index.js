/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import database from '@react-native-firebase/database';

export default function CrudScreen() {
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [name, setName] = useState('');

  const readPokeBagData = () => {
    setLoading(true);
    const refrence = database().ref('/pokemonBag');
    refrence.on('value', snapshot => {
      const data = snapshot.val();
      GetData(data);
      console.log('data', data);
      setLoading(false);
    });
  };

  const savePokemon = () => {
    const refrence = database().ref('/pokemonBag');
    try {
      refrence.push({name: 'woke'});
      Alert.alert('Successfully Saved');
    } catch (error) {
      Alert.alert('Ops', error);
    }
  };

  const removePokemon = async id => {
    try {
      await database().ref(`/pokemonBag/${id}`).remove();
      Alert.alert('Successfully Removed');
    } catch (error) {
      Alert.alert('Ops', error);
    }
  };

  const updatePokemon = async id => {
    try {
      await database().ref(`/pokemonBag/${id}`).update({name: 'Updated'});
      Alert.alert('Successfully Removed');
    } catch (error) {
      Alert.alert('Ops', error);
    }
  };

  const GetData = data => {
    let keyFirebase = [];
    keyFirebase = Object.keys(data);
    setKey(keyFirebase);
    setPokemonData(data);
  };

  useEffect(() => {
    readPokeBagData();
  }, []);
  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Pokemon Bag</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter Pokemon Name"
              onChangeText={text => setName(text)}
            />
            <Button title="Save" onPress={() => savePokemon()} />
          </View>
          <FlatList
            data={key}
            numColumns={2}
            columnWrapperStyle={{
              margin: 5,
            }}
            renderItem={({item, index}) => (
              <>
                <TouchableOpacity
                  onPress={() => updatePokemon(item)}
                  style={styles.pokeBagItem}>
                  <Text style={styles.pokeBagItemText}>
                    🔴 {pokemonData[item]?.name}
                  </Text>
                </TouchableOpacity>
              </>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#00BFFF',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  bodyContent: {
    flex: 5,
  },
  pokeBag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pokeBagItem: {
    width: '50%',
    height: 50,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
  },
  pokeBagItemText: {
    color: '#fff',
    fontSize: 18,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#00BFFF',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
