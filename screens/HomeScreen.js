import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
return (
    <View style={styles.container}>
      <Text style={styles.title}>OceanLifeCare</Text>
      <Text style={styles.text}>Cuidando da vida nos oceanos.</Text>
      <Image style={styles.image} source={require('../assets/marisco-home.jpeg')}/>
      <View style={{width:600, padding:10}}>
        <Text style={styles.text}>O OceanLifeCare tem como propósito o monitoramento de plantações de mariscos, identificando possíveis espécies
         intrusas dentro da cultura de bilvalves.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign:'justify'
  },
  errorText: {
    color: 'red',
  },
  title:{
    fontSize: 26,
    color: 'white'
  },
  image:{
    borderRadius:3,
    width:300,
    height:300,
    margin:8
  }
});

export default HomeScreen;
