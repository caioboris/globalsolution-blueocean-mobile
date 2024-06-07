import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailsScreen = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/details')
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.errorText}>Error: {error.message}</Text> : null}
      <Text style={styles.text}>Details Screen</Text>
      {data && <Text>{JSON.stringify(data)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  errorText: {
    color: 'red',
  },
});

export default DetailsScreen;