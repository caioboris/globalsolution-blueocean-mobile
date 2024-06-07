import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createPlantation } from '../apiService.js';

const CreateScreen = () => {
  const [producerName, setProducerName] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [species, setSpecies] = useState('');

  const handleSubmit = () => {
    const data = {
      producerName,
      location,
      quantity,
      species,
    };

    createPlantation(data)
      .then(response => {
        Alert.alert('Success', 'Cultura de marisco registrada com sucesso.');
        setProducerName('');
        setLocation('');
        setQuantity('');
        setSpecies('');
      })
      .catch(error => {
        Alert.alert('Error', 'Algo deu errado, Por favor tente novamente.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Cultura de Mariscos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produtor"
        value={producerName}
        onChangeText={setProducerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Local"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Espécie"
        value={species}
        onChangeText={setSpecies}
      />
      <Button title="Cadastrar" onPress={handleSubmit} color="#1e90ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

export default CreateScreen;
